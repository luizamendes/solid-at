import { IMailProvider } from "../../providers/IMail.provider";
import { ISendMailToListRequestDTO } from "./sendMailToList.dto";

export class SendMailToListUseCase {
  private mailProvider: IMailProvider; 

  constructor(mailProvider: IMailProvider) {
    this.mailProvider = mailProvider;
  }

  async execute(data: ISendMailToListRequestDTO) {
    await this.mailProvider.sendMailToList({
      addressList: data.to,
      from: {
        name: data.from.name,
        email: data.from.email,
      },
      subject: data.subject,
      body: data.body,
    });
  };
}