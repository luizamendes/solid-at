import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUser.useCase";

export class UpdateUserController {
  private updateUserUseCase: UpdateUserUseCase

  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, email, password } = request.body;

    try {
      await this.updateUserUseCase.execute({ id, name, email, password });

      return response.status(201).send();
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}