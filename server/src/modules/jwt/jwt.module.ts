import { Module } from "@nestjs/common";
import { JwtModule as JwtModuleConfig, JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModuleConfig.register({
      global: true,
      secret: `${process.env.JWT_SECRET}`,
      signOptions: {
        expiresIn: "60s",
      },
    }),
  ],
  controllers: [],
  providers: [JwtService],
  exports: [JwtModuleConfig],
})
export class JwtModule {}
