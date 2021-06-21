import { IGeneralMessage, IMailProvider, IMessage } from "../IMail.provider";

export class MailTesterMailProvider implements IMailProvider {
  async sendMail(message: IMessage): Promise<void> {
    const { to, from, subject, body } = message;
    return new Promise<void>((resolve) => {
      resolve();
    })
  }

  async sendMailToList(message: IGeneralMessage): Promise<void> {
    const { from, subject, body } = message;
    return new Promise<void>((resolve) => {
      resolve();
    })
  }
}