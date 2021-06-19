import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsers.repository";
import { IUpdateUserRequestDTO } from "./updateUser.dto";

export class UpdateUserUseCase {
  private usersRepository: IUsersRepository; 

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(data: IUpdateUserRequestDTO) {
    const user = await this.usersRepository.findUserByEmail(data.email);

    if (!user) {
      throw new Error('User does not exist');
    }
    
    const updatedUser = new User(data);

    await this.usersRepository.editUser(updatedUser);
  }
}