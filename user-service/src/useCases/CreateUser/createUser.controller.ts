import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUser.useCase";

export class CreateUserController {
  private createUserUseCase: CreateUserUseCase

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      const id = await this.createUserUseCase.execute({ name, email, password });

      return response.status(201).send(id);
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}