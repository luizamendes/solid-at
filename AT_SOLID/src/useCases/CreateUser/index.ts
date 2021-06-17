import { MailTrapMailProvider } from "../../providers/implementations/Mailtrap.provider";
import { LocalUsersRepository } from "../../repositories/implementations/LocalUsers.repository";
import { CreateUserController } from "./createUser.controller";
import { CreateUserUseCase } from "./createUser.useCase";

const mailtrapProvider = new MailTrapMailProvider();
const localUserRepository = new LocalUsersRepository();

const createUserUseCase = new CreateUserUseCase(localUserRepository, mailtrapProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController}