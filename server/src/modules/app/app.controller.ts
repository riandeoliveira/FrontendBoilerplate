import { Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "modules/prisma/prisma.service";
import { AppService } from "./app.service";

@Controller("/zzz")
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prismaService: PrismaService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getUsers();
  }

  @Post()
  createUser() {}
}
