import { Module } from "@nestjs/common";
import { PrismaService } from "modules/prisma/prisma.service";
import { UserController } from "modules/user/user.controller";
import { UserService } from "modules/user/user.service";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [PrismaService, AppService, UserService],
})
export class AppModule {}
