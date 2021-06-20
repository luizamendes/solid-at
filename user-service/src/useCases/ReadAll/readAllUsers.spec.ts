import { User } from "../../entities/User";

const { LocalUsersRepository } = require("../../repositories/implementations/LocalUsers.repository");
const { ReadAllUsersUseCase } = require("./readAllUsers.useCase");

const localUserRepository = new LocalUsersRepository();

const readAllUsersUseCase = new ReadAllUsersUseCase(localUserRepository);

describe('Testando buscar todos usuarios', () => {
  beforeEach(() => {
    localUserRepository.users = [ new User({ name: 'First', email: 'first@gmail.com', password: '2122' }) ];
  });

  it('should get all users successfully', async () => {
    const users = await readAllUsersUseCase.execute();

    expect(users).toHaveLength(1);    
  });
})