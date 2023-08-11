import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator"

export class SignInDto {

    @IsNotEmpty()
    @IsEmail()
    email : string  

    @MaxLength(15)
    @IsString()
    password : string
}