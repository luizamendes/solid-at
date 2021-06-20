import { Request, Response } from "express";
import { ReadUserUseCase } from "./readUser.useCase";

export class ReadUserController {
  private readUserUseCase: ReadUserUseCase

  constructor(readUserUseCase: ReadUserUseCase) {
    this.readUserUseCase = readUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    try {
      const user = await this.readUserUseCase.execute({ id });
      
      return response.status(200).send(user);
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}