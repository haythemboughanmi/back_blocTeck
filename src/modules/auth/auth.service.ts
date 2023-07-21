import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import { SignInDto } from 'src/shared/DTO/signIn.dto';
import { JwtService  } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username, passport) {
    return null;
  }

  //TODO : Excepetion messages should be a enum
  async signIn(signinDto: SignInDto):Promise<string> {
    const user = await this.userRepository.findOne({
      where: { email: signinDto.email },
    });
    console.log(user, 'USSER');
    if (!user) {
      throw new NotFoundException('Invalid Crendentials');
    }
    if (!user.checkPassword(signinDto.password)) {
      throw new NotFoundException('Invalid Crendentials');
    }
    delete user.password;
    return this.signToken(user);
  }

  async signToken(user: User): Promise<string> {
    const payload = {...user};
    return this.jwtService.sign(payload, { secret: process.env.SECRET });
  }
}
