import { User } from "../entities/User";

export interface IAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IGeneralMessage {
  addressList: User[];
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
  sendMailToList(message: IGeneralMessage): Promise<void>;
}