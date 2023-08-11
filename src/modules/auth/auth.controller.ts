import { Controller , Post , Body} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/shared/DTO/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){
    }

    @Post()
    signIn(@Body() SignInDto : SignInDto):Promise<string>{
       return this.authService.signIn(SignInDto)
    }
}


    


