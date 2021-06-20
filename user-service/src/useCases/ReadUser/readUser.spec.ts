import { User } from "../../entities/User";

const { LocalUsersRepository } = require("../../repositories/implementations/LocalUsers.repository");
const { ReadUserUseCase } = require("./readUser.useCase");

const localUserRepository = new LocalUsersRepository();

const readUserUseCase = new ReadUserUseCase(localUserRepository);

describe('Testando buscar usuario', () => {
  beforeEach(() => {
    localUserRepository.users = [ new User({ name: 'First', email: 'first@gmail.com', password: '2122' }) ];
  });

  it('should get user successfully', async () => {
    const existingUser = await localUserRepository.findUserByEmail('first@gmail.com');
    const fetchedUser = await readUserUseCase.execute({ id: existingUser.id });

    expect(existingUser).toEqual(fetchedUser);    
  });

  it('should get error when user does not exist', async () => {
    await expect(readUserUseCase.execute({ id: 'notexistingid' }))
      .rejects
      .toThrow('User does not exist');
  });
})