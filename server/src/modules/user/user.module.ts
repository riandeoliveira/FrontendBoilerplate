import { Module } from "@nestjs/common/decorators";
import { JwtModule } from "modules/jwt/jwt.module";
import { PrismaModule } from "modules/prisma/prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
