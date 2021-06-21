import { Request, Response } from "express";
import { SendMailToListUseCase } from "./sendMailToList.useCase";

export class SendMailToListController {
  private sendMailToListUseCase: SendMailToListUseCase

  constructor(sendMailToListUseCase: SendMailToListUseCase) {
    this.sendMailToListUseCase = sendMailToListUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { to, from, subject, body } = request.body;

    try {
      await this.sendMailToListUseCase.execute({ to, from, subject, body });

      return response.status(201).send('Email was sent successfully');
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}