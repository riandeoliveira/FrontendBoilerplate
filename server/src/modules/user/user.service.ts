import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { randomUUID } from "crypto";
import { PrismaService } from "modules/prisma/prisma.service";
import { RegisterUserDTO } from "./user.dto";

interface IUserService {
  findAll(): Promise<User[]>;
  register(user: RegisterUserDTO): Promise<User>;
}

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    const usersFound: User[] = await this.prisma.user.findMany();

    return usersFound;
  }

  async register(user: RegisterUserDTO): Promise<any> {
    const registeredUser: User = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        ...user,
      },
    });

    return registeredUser;
  }
}
