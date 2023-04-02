import { Request, Response } from "express";
import { UserRepository } from "../repositories";

export class FindAllUsersUseCase {
  constructor(
    private readonly request: Request,
    private readonly response: Response,
    private readonly userRepository: UserRepository
  ) {}

  public async execute() {
    return await this.userRepository.findAll();
  }
}
  