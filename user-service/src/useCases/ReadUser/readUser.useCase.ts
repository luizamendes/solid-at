import { IUsersRepository } from "../../repositories/IUsers.repository";
import { IReadUserRequestDTO } from "./readUser.dto";

export class ReadUserUseCase {
  private usersRepository: IUsersRepository; 

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id }: IReadUserRequestDTO) {
    const user = await this.usersRepository.findUserById(id);

    if (!user) {
      throw new Error('User does not exist');
    }

    return user;
  }
}