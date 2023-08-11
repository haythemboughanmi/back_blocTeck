import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { Post } from 'src/models/post.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>
  ) {}

  async createPost(user :any , newPost :any):Promise<any> {
    let savedPost =  this.postRepository.create({ ower : user , ...newPost})
    let baha = await this.postRepository.save(savedPost)
    console.log(baha)
    return baha
  }

  async getPost(postId : string){
    let post = await this.postRepository.createQueryBuilder('post')
    .select('post')
    .where('post.id  = :postId', { postId: postId })
    .leftJoin('post.ower', 'user')
    .addSelect('user.name', 'name')
    .getRawOne()
    return post
  }
  
}
