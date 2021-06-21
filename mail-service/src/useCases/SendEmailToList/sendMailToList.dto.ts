import { IAddress } from "../../providers/IMail.provider";

export interface ISendMailToListRequestDTO {
  to: IAddress[],
  from: IAddress,
  subject: string;
  body: string;
}