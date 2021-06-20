import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMail.provider";
import { IUsersRepository } from "../../repositories/IUsers.repository";
import { ICreateUserRequestDTO } from "./createUser.dto";

// Single responsability principle
export class CreateUserUseCase {
  // Liskov substitution principle (rcebemos o userrepository, uma interface, nao interessa
  // qual repositorio, se tiver esses metodos, vai funcionar)
  // Dependency inversion principle: nao dependo diretamente de umaa implementacao
  // dependendo de uma outra classe que faz a Implementação 
  private usersRepository: IUsersRepository; 
  private mailProvider: IMailProvider; 

  constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findUserByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    
    const user = new User(data);

    const id = await this.usersRepository.saveUser(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe',
        email: 'equipe@equipe.com'
      },
      subject: 'Bem vindo!',
      body: '<p>Bem vindo ao nosso app!</p>'
    });

    return id;
  }
}