import { User } from "@prisma/client";
import { prisma } from "../prisma";

export class UserService {
  public async findAll(): Promise<User[]> {
    const users: User[] = await prisma.user.findMany();

    return users;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const userFound: User | null = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return userFound;
  }

  public async findById(id: string): Promise<User | null> {
    const userFound: User | null = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return userFound;
  }

  public async findByUsername(username: string): Promise<User | null> {
    const userFound: User | null = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    return userFound;
  }
}

export const userService: UserService = new UserService();
