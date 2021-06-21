import { IMailProvider } from "../../providers/IMail.provider";
import { IUsersRepository } from "../../repositories/IUsers.repository";
import { INotifyAllUsersRequestDTO } from "./notifyAllUsers.dto";

export class NotifyAllUsersUseCase {
  private usersRepository: IUsersRepository; 
  private mailProvider: IMailProvider; 

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(data: INotifyAllUsersRequestDTO) {
    const users = await this.usersRepository.getAllUsers();

    if (users.length === 0) {
      throw new Error('Database is empty');
    }
    
    await this.mailProvider.sendMailToList({
      addressList: users,
      from: {
        name: data.from.name,
        email: data.from.email
      },
      subject: data.subject,
      body: data.body,
    });
  }
}