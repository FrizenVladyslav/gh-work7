import * as path from 'path';
import * as fs from 'fs';
import parseCSV from 'geekhub-csv-parser';
import { badRequestException } from '../middlewares/errorHandler';

class FileService {
  constructor() {
    this.fileDir = path.resolve(__dirname, '../../uploads/');
  }

  getFile(filename) {
    const filePath = path.resolve(this.fileDir, filename);
    return fs.createReadStream(filePath);
  }

  parseCSV(filename) {
    const filePath = path.resolve(this.fileDir, filename);
    if (!fs.existsSync(filePath)) badRequestException('File not found');

    return new Promise((resolve, reject) => {
      parseCSV(filePath, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }
}

export default new FileService();
