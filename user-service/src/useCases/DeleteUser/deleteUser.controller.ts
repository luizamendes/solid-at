import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUser.useCase";

export class DeleteUserController {
  private deleteUserUseCase: DeleteUserUseCase

  constructor(deleteUserUseCase: DeleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    try {
      await this.deleteUserUseCase.execute({ id });

      return response.status(201).send();
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}