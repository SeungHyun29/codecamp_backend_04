import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class FileService {
  async upload({ files }) {
    // 파일을 클라우드 스토리지에 저장하는 로직
    // const aaa = await files[0];
    // const bbb = await files[1];

    const waitedFiles = await Promise.all(files);
    console.log(waitedFiles); // [file,file]

    const bucket = 'hamzzi-storage';
    const storage = new Storage({
      projectId: 'reliable-aloe-358105',
      keyFilename: 'reliable-aloe-358105-7c4329d1afa9.json',
    }).bucket(bucket);

    const results = await Promise.all(
      waitedFiles.map(
        (el) =>
          new Promise((resolve, reject) => {
            el.createReadStream()
              .pipe(storage.file(el.filename).createWriteStream())
              .on('finish', () => resolve(`${bucket}/${el.filename}`))
              .on('error', () => reject('실패'));
          }),
      ),
    );

    // const results = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     waitedFiles[0]
    //       .createReadStream()
    //       .pipe(storage.file(waitedFiles[0].filename).createWriteStream())
    //       .on('finish', () => resolve('성공'))
    //       .on('error', () => reject('실패'));
    //   }),

    //   new Promise((resolve, reject) => {
    //     waitedFiles[1]
    //       .createReadStream()
    //       .pipe(storage.file(waitedFiles[1].filename).createWriteStream())
    //       .on('finish', () => resolve('성공'))
    //       .on('error', () => reject('실패'));
    //   }),
    // ]);

    return results;
  }
}
