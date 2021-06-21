import { IGeneralMessage, IMailProvider, IMessage } from "../IMail.provider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0c618a7792c321",
        pass: "3979a4c5664a89"
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body
    });
  }

  async sendMailToList(message: IGeneralMessage): Promise<void> {
    message.addressList.forEach(user => {
      this.transporter.sendMail({
        to: {
          name: user.name,
          address: user.email,
        },
        from: {
          name: message.from.name,
          address: message.from.email,
        },
        subject: message.subject,
        html: message.body
      });
    });
  }
}