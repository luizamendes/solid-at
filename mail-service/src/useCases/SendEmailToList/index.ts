import { MailTrapMailProvider } from "../../providers/implementations/Mailtrap.provider";
import { SendMailToListController } from "./sendMailToList.controller";
import { SendMailToListUseCase } from "./sendMailToList.useCase";

const mailtrapProvider = new MailTrapMailProvider();

const sendMailToListUseCase = new SendMailToListUseCase(mailtrapProvider);

const sendMailToListController = new SendMailToListController(sendMailToListUseCase);

export { sendMailToListController }