import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user.entity';
import { CreateUserDto } from 'src/shared/DTO/createUser.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadModule } from '../file-upload/file-upload.module';
// import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  getUserById(@Param('userId') userId: number):Promise<User> {
    return this.userService.getOneById(userId);
  }
  @Post()
  @UseInterceptors( FileInterceptor('image'))
  createUser(@Body() newUser : CreateUserDto , @UploadedFile() file):Promise<User> {
    console.log('gssdfsd');
    
    return this.userService.createUser(newUser)
  }

  @Get('posts/:userId')
  getUserPostsById(@Param('userId') userId : number) {
    return this.userService.getUserById(userId)
  }
}
