import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
// @ts-ignore
import { diskStorage } from 'multer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

export const imageFileFilter = (req, file, callback) => {
  console.log('fileWsel ', file.originalname);

  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException('Type of file is not allowed!', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, true);
};

export const filename = (req, file, callback) => {
  console.log('filename');
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|pdf)$/)) {
    return callback(
      new HttpException('Type of file is not allowed!', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, file.originalname);
};

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {    
    return {
      storage: diskStorage({
        destination: './upload',
        filename: filename,
      }),
      limits: {
        fieldSize: 8 * 1024 * 1024,
      },
      fileFilter: imageFileFilter,
    };
  }
}
