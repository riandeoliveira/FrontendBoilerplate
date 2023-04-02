import { User } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../prisma";

class UserController {
  public async findAll(_request: Request, response: Response) {
    const users: User[] = await prisma.user.findMany();

    return response.status(200).json(users);
  }
}

export const userController: UserController = new UserController();
