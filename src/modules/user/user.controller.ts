import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user.entity';
import { CreateUserDto } from 'src/shared/DTO/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  getUserById(@Param('userId') userId: number):Promise<User> {
    return this.userService.getOneById(userId);
  }
  @Post()
  createUser(@Body() newUser : CreateUserDto):Promise<User> {
    return this.userService.createUser(newUser)
  }
}
