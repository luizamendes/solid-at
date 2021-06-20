import { IUsersRepository } from "../../repositories/IUsers.repository";

export class ReadAllUsersUseCase {
  private usersRepository: IUsersRepository; 

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute() {
    return await this.usersRepository.getAllUsers();
  }
}