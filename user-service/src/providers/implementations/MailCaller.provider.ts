import { IMailProvider, IMessage } from "../IMail.provider";
import axios from 'axios';

export class MailCallerMailProvider implements IMailProvider {
  async sendMail(message: IMessage): Promise<void> {
    const { to, from, subject, body } = message;

    axios.post('http://localhost:6666/send-email', { 
      to: {
        name: to.name,
        email: to.email,
      },
      from: {
        name: from.name,
        email: from.email,
      },
      subject,
      body,
    })
    .then()
    .catch(error => error);
  }
}