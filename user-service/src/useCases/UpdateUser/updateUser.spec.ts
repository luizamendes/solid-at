import { User } from "../../entities/User";

const { LocalUsersRepository } = require("../../repositories/implementations/LocalUsers.repository");
const { UpdateUserUseCase } = require("./updateUser.useCase");

const localUserRepository = new LocalUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(localUserRepository);

describe('Testando atualização de usuario', () => {
  beforeEach(() => {
    localUserRepository.users = [ new User({ name: 'First', email: 'first@gmail.com', password: '2122' }) ];
  });

  it('should update user successfully', async () => {
    const existingUser = await localUserRepository.findUserByEmail('first@gmail.com');
    await updateUserUseCase.execute({ id: existingUser.id, name: 'Luiza', email: 'newemail@gmail.com', password: '12345' });

    expect(localUserRepository.findUserByEmail('newemail@gmail.com')).toBeTruthy();    
    expect(localUserRepository.findUserByEmail('first@gmail.com')).toBeFalsy();    
  });

  it('should get error when user does not exist', async () => {
    await expect(updateUserUseCase.execute({ id: 'notexistingid', name: 'Luiza', email: 'first@gmail.com', password: '12345' }))
      .rejects
      .toThrow('User does not exist');
  });
})