import { Module } from "@nestjs/common";
import { JwtModule } from "modules/jwt/jwt.module";
import { UserModule } from "modules/user/user.module";

@Module({
  imports: [JwtModule, UserModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
