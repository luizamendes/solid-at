import { MailTrapMailProvider } from "../../providers/implementations/Mailtrap.provider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgreUsers.repository";
import { CreateUserController } from "./createUser.controller";
import { CreateUserUseCase } from "./createUser.useCase";

const mailtrapProvider = new MailTrapMailProvider();
const postgresUserRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgresUserRepository, mailtrapProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController}