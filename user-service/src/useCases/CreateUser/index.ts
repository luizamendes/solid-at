import { MailCallerMailProvider } from "../../providers/implementations/MailCaller.provider";
import { LocalUsersRepository } from "../../repositories/implementations/LocalUsers.repository";
import { CreateUserController } from "./createUser.controller";
import { CreateUserUseCase } from "./createUser.useCase";

const mailCallerProvider = new MailCallerMailProvider();
const localUserRepository = new LocalUsersRepository();

const createUserUseCase = new CreateUserUseCase(localUserRepository, mailCallerProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController}