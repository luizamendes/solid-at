import { IUsersRepository } from "../../repositories/IUsers.repository";
import { IDeleteUserRequestDTO } from "./deleteUser.dto";

export class DeleteUserUseCase {
  private usersRepository: IUsersRepository; 

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id }: IDeleteUserRequestDTO) {
    const user = await this.usersRepository.findUserById(id);

    if (!user) {
      throw new Error('User does not exist');
    }

    await this.usersRepository.deleteUser(id);
  }
}