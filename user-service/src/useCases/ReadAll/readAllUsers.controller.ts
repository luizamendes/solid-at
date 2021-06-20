import { Request, Response } from "express";
import { ReadAllUsersUseCase } from "./readAllUsers.useCase";

export class ReadAllUsersController {
  private readUserUseCase: ReadAllUsersUseCase

  constructor(readUserUseCase: ReadAllUsersUseCase) {
    this.readUserUseCase = readUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.readUserUseCase.execute();
      
      return response.status(200).send(users);
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}