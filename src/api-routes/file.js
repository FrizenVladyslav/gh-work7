import { Router } from 'express';
import { Container } from 'typedi';
import multer from 'multer';

const dirName = 'uploads/';
const uploads = multer({ dest: dirName });
const fileService = Container.get('fileService');

const router = new Router();

router.get('/:filename', async (req, res) => {
  const { filename } = req.params;
  fileService.getFile(filename).pipe(res);
});

router.post('/', uploads.single('file'), async (req, res) => {
  if (!req.file || !req.file.filename) {
    return res.status(400).json({ message: 'File is required' });
  }

  res.send(req.file.filename);
});

export default router;
