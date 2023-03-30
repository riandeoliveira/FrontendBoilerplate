import { Controller, Get, Post } from "@nestjs/common/decorators";
import { PrismaService } from "modules/prisma/prisma.service";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(
    private prismaService: PrismaService,
    private readonly userService: UserService
  ) {}

  @Get("all")
  getAll() {
    return "ola";
  }

  @Post("/register")
  create() {
    return this.userService.register();
  }
}
