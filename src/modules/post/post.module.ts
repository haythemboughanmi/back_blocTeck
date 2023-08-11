import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from 'src/models/post.entity';
import { User } from 'src/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from 'src/shared/middlewares/auth.middleware';
import { UserService } from '../user/user.service';

@Module({
  providers: [PostService,UserService],
  controllers: [PostController],
  imports : [TypeOrmModule.forFeature([User,Post])]

})
export class PostModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('post')
  }
}
