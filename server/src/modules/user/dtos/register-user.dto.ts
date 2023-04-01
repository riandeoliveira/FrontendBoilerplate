import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
} from "class-validator";

export abstract class RegisterUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  public name: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 30)
  public username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @Length(10, 100)
  public email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  @Length(8, 20)
  public password: string;
}
