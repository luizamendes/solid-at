import { MailCallerMailProvider } from "./../providers/implementations/MailCaller.provider";
import { LocalUsersRepository } from "./../repositories/implementations/LocalUsers.repository";
import { CreateUserController } from "./CreateUser/createUser.controller";
import { CreateUserUseCase } from "./CreateUser/createUser.useCase";
import { DeleteUserController } from "./DeleteUser/deleteUser.controller";
import { DeleteUserUseCase } from "./DeleteUser/deleteUser.useCase";
import { NotifyAllUsersController } from "./NotifyAllUsers/notifyAllUsers.controller";
import { NotifyAllUsersUseCase } from "./NotifyAllUsers/notifyAllUsers.useCase";
import { ReadAllUsersController } from "./ReadAll/readAllUsers.controller";
import { ReadAllUsersUseCase } from "./ReadAll/readAllUsers.useCase";
import { ReadUserController } from "./ReadUser/readUser.controller";
import { ReadUserUseCase } from "./ReadUser/readUser.useCase";
import { UpdateUserController } from "./UpdateUser/updateUser.controller";
import { UpdateUserUseCase } from "./UpdateUser/updateUser.useCase";

const mailCallerProvider = new MailCallerMailProvider();
const localUserRepository = new LocalUsersRepository();

// Create user
const createUserUseCase = new CreateUserUseCase(localUserRepository, mailCallerProvider);
const createUserController = new CreateUserController(createUserUseCase);

// Get user by id
const readUserUseCase = new ReadUserUseCase(localUserRepository);
const readUserController = new ReadUserController(readUserUseCase);

// Get All users
const readAllUsersUseCase = new ReadAllUsersUseCase(localUserRepository);
const readAllUsersController = new ReadAllUsersController(readAllUsersUseCase);

// Update users
const updateUserUseCase = new UpdateUserUseCase(localUserRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

// Delete user
const deleteUserUseCase = new DeleteUserUseCase(localUserRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

// Notify users
const notifyAllUsersUseCase = new NotifyAllUsersUseCase(localUserRepository, mailCallerProvider);
const notifyAllUsersController = new NotifyAllUsersController(notifyAllUsersUseCase);

export { createUserController, readUserController, readAllUsersController, updateUserController, deleteUserController, notifyAllUsersController}