import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { CreateUserDto } from 'src/shared/DTO/createUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getOneById(userId: number): Promise<User> | undefined {
    return await this.userRepository.findOneOrFail({ where: { id: userId } });
  }

  async createUser(newUser: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(newUser);
    let savedUser = await this.userRepository.save(user);
    delete savedUser.password;
    return savedUser
  }
async getUserById(userId:number): Promise<any>{
  const userPost= this.userRepository.createQueryBuilder('User')
  .select('User')
  .where('User.id = :userId', {userId :userId} )
  .leftJoinAndSelect('User.posts', 'posts')
  // .addSelect('posts', 'posts')
  .getRawMany()
  return userPost
}

}
