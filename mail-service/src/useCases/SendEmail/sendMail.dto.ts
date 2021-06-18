import { IAddress } from "../../providers/IMail.provider";

export interface ISendMailRequestDTO {
  to: IAddress,
  from: IAddress,
  subject: string;
  body: string;
}