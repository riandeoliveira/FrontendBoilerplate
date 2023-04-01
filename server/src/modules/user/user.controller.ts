import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { User } from "@prisma/client";
import { RegisterUserDTO } from "./user.dto";
import { UserService } from "./user.service";

@Controller("/api/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/all")
  async findAll(): Promise<User[]> {
    const usersFound: User[] = await this.userService.findAll();

    return usersFound;
  }

  @Post("/register")
  async register(@Body() body: RegisterUserDTO): Promise<User> {
    const user: User = await this.userService.register(body);

    return user;
  }
}
