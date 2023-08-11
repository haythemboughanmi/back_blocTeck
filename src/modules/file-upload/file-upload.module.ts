import { Module } from '@nestjs/common';
import { MulterConfigService } from './multerConfig';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
    imports: [MulterModule.registerAsync({
        useClass: MulterConfigService,
      })]
      ,
      providers :[MulterConfigService]
})
export class FileUploadModule {}
