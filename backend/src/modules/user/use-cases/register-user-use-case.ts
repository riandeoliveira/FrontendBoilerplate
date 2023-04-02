import { Request, Response } from "express";
import { v1 as uuidv1 } from "uuid";
import { prisma } from "../../../prisma";
import { RegisterUserDTO } from "../dtos/register-user-dto";
import { UserRepository } from "../repositories";

export class RegisterUserUseCase {
  constructor(
    private readonly request: Request,
    private readonly response: Response,
    private readonly userRepository: UserRepository
  ) {}

  public async execute() {
    const user: RegisterUserDTO = this.request.body;

    return await prisma.user.create({
      data: {
        id: uuidv1(),
        ...user,
      },
    });
  }
}
