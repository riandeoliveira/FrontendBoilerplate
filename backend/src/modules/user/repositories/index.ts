import { User } from "@prisma/client";
import { prisma } from "../../../prisma";

export class UserRepository {
  public async findAll() {
    const users: User[] = await prisma.user.findMany();

    return users;
  }
}
