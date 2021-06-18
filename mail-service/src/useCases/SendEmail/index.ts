import { MailTrapMailProvider } from "../../providers/implementations/Mailtrap.provider";
import { SendMailController } from "./sendMail.controller";
import { SendMailUseCase } from "./sendMail.useCase";

const mailtrapProvider = new MailTrapMailProvider();

const sendMailUseCase = new SendMailUseCase(mailtrapProvider);

const sendMailController = new SendMailController(sendMailUseCase);

export { sendMailController }