import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from "class-validator";

export class RegisterUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @Length(10, 100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  @Length(8, 20)
  password: string;
}
