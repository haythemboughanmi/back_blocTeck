import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { MulterConfigService } from '../file-upload/multerConfig';

@Module({
  providers: [UserService ],
  controllers: [UserController],
  imports : [TypeOrmModule.forFeature([User]),FileUploadModule]
})
export class UserModule {}
