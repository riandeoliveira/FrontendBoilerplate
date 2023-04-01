import { Module } from "@nestjs/common";
import { PrismaService } from "modules/prisma/prisma.service";
import { UserController } from "modules/user/user.controller";
import { UserService } from "modules/user/user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class AppModule {}
