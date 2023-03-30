import { Module } from "@nestjs/common/decorators";
import { PrismaService } from "modules/prisma/prisma.service";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserService],
})
export class UserModule {}
