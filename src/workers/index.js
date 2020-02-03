import { Worker } from 'worker_threads';
import * as path from 'path';

export default (workerName, workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, `./${workerName}.js`), {
      workerData,
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
};