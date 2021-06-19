import { LocalUsersRepository } from "../../repositories/implementations/LocalUsers.repository";
import { UpdateUserController } from "./updateUser.controller";
import { UpdateUserUseCase } from "./updateUser.useCase";

const localUserRepository = new LocalUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(localUserRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController}