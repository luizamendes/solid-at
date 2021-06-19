import { User } from "../../entities/User";

const { MailTesterMailProvider } = require("../../providers/implementations/MailTester.provider");
const { LocalUsersRepository } = require("../../repositories/implementations/LocalUsers.repository");
const { CreateUserUseCase } = require("./createUser.useCase");

const mailTesterProvider = new MailTesterMailProvider();
const localUserRepository = new LocalUsersRepository();

const createUserUseCase = new CreateUserUseCase(localUserRepository, mailTesterProvider);

describe('Testando criação de usuario', () => {
  beforeEach(() => {
    localUserRepository.users = [ new User({ name: 'First', email: 'first@gmail.com', password: '2122' }) ];
  });

  it('should create user successfully', async () => {
    await createUserUseCase.execute({ name: 'Luiza', email: 'luiza@gmail.com', password: '12345' });
    const user = localUserRepository.findUserByEmail('luiza@gmail.com');

    expect(user).toBeTruthy();    
  });

  it('should get error when user already exists', async () => {
    await expect(createUserUseCase.execute({ name: 'Luiza', email: 'first@gmail.com', password: '12345' }))
      .rejects
      .toThrow('User already exists');
  });
})