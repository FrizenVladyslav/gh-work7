import { parentPort, workerData } from 'worker_threads';
import * as fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const resultName = workerData.replace('.', 'reslut.');

ffmpeg(workerData)
  .videoCodec('libx264')
  .audioCodec('libmp3lame')
  .size('320x240')
  .save(resultName)
  .on('error', err => {
    parentPort.postMessage({ message: err.msg, status: 'Error' });
  })
  .on('end', () => {
    fs.unlinkSync(workerData);
    fs.renameSync(resultName, workerData);
    parentPort.postMessage({ workerData, status: 'Done' });
  });
