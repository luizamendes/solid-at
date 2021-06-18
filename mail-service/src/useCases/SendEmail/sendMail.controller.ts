import { Request, Response } from "express";
import { SendMailUseCase } from "./sendMail.useCase";

export class SendMailController {
  private sendMailUseCase: SendMailUseCase

  constructor(sendMailUseCase: SendMailUseCase) {
    this.sendMailUseCase = sendMailUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { to, from, subject, body } = request.body;

    try {
      await this.sendMailUseCase.execute({ to, from, subject, body });

      return response.status(201).send('Email was sent successfully');
    } catch(error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      });

    }
  }
}