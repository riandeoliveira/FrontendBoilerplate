import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from "@nestjs/common/decorators";
import { User } from "@prisma/client";
import { AuthGuard } from "modules/auth/auth.guard";
import { RegisterUserDTO } from "./dtos/register-user.dto";
import { UserService } from "./user.service";

interface IUserController {
  findAll(): Promise<User[]>;
}

@Controller("/api/users")
export class UserController implements IUserController {
  constructor(private readonly user: UserService) {}

  @UseGuards(AuthGuard)
  @Get("/all")
  public async findAll(): Promise<User[]> {
    const usersFound: User[] = await this.user.findAll();

    return usersFound;
  }

  @Post("/register")
  public async register(@Body() registerUserDTO: RegisterUserDTO) {
    const user = await this.user.register(registerUserDTO);

    return user;
  }
}
