import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { randomUUID } from "crypto";
import { HttpError } from "error/http";
import { PrismaService } from "modules/prisma/prisma.service";
import { RegisterUserDTO } from "./dtos/register-user.dto";

interface IUserService {
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  register(user: RegisterUserDTO): Promise<any>;
}

@Injectable()
export class UserService implements IUserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService
  ) {}

  public async findAll(): Promise<User[]> {
    const usersFound: User[] = await this.prisma.user.findMany();

    return usersFound;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const userFound: User | null = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return userFound;
  }

  public async findById(id: string): Promise<User | null> {
    const userFound: User | null = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return userFound;
  }

  public async findByUsername(username: string): Promise<User | null> {
    const userFound: User | null = await this.prisma.user.findUnique({
      where: {
        username,
      },
    });

    return userFound;
  }

  public async register(user: RegisterUserDTO): Promise<any> {
    const isValidUser = await this.validate(user);

    if (!isValidUser) {
      throw new HttpError("invalid user", "BAD_REQUEST");
    }

    const createdUser = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        ...user,
      },
    });

    const { password, ...result } = createdUser;

    const accessToken = await this.jwt.signAsync(user);

    return {
      user: result,
      access_token: accessToken,
    };
  }

  public async validate(user: RegisterUserDTO): Promise<boolean> {
    const isValidUsername = await this.validateUsername(user.username);
    const isValidEmail = await this.validateEmail(user.email);

    if (isValidUsername && isValidEmail) {
      return true;
    }

    return false;
  }

  public async validateUsername(username: string) {
    const usernameAlreadyExists = await this.findByUsername(username);

    if (usernameAlreadyExists) {
      throw new HttpError("username already exists", "BAD_REQUEST");
    }

    return true;
  }

  public async validateEmail(email: string) {
    const emailAlreadyExists = await this.findByEmail(email);

    if (emailAlreadyExists) {
      throw new HttpError("email already exists", "BAD_REQUEST");
    }

    return true;
  }
}
