import { IMailProvider } from "../../providers/IMail.provider";
import { ISendMailRequestDTO } from "./sendMail.dto";

export class SendMailUseCase {
  private mailProvider: IMailProvider; 

  constructor(mailProvider: IMailProvider) {
    this.mailProvider = mailProvider;
  }

  async execute(data: ISendMailRequestDTO) {
    await this.mailProvider.sendMail({
      to: {
        name: data.to.name,
        email: data.to.email,
      },
      from: {
        name: data.from.name,
        email: data.from.email,
      },
      subject: data.subject,
      body: data.body,
    })
  }
}