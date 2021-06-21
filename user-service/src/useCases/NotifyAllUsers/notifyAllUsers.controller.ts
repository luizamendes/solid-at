import { Request, Response } from "express";
import { NotifyAllUsersUseCase } from "./notifyAllUsers.useCase";

export class NotifyAllUsersController {
  private notifyAllUsersUseCase: NotifyAllUsersUseCase

  constructor(notifyAllUsersUseCase: NotifyAllUsersUseCase) {
    this.notifyAllUsersUseCase = notifyAllUsersUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { from, subject, body } = request.body;

    try {
      await this.notifyAllUsersUseCase.execute({ from, subject, body });

      return response.status(200).send('Emails enviados');
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}