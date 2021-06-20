import { User } from "../../entities/User";

const { LocalUsersRepository } = require("../../repositories/implementations/LocalUsers.repository");
const { DeleteUserUseCase } = require("./deleteUser.useCase");

const localUserRepository = new LocalUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(localUserRepository);

describe('Testando deleção de usuario', () => {
  beforeEach(() => {
    localUserRepository.users = [ new User({ name: 'First', email: 'first@gmail.com', password: '2122' }) ];
  });

  it('should delete user successfully', async () => {
    const existingUser = await localUserRepository.findUserByEmail('first@gmail.com');
    await deleteUserUseCase.execute({ id: existingUser.id });

    expect(localUserRepository.findUserByEmail('first@gmail.com')).toBeFalsy();    
  });

  it('should get error when user does not exist', async () => {
    await expect(deleteUserUseCase.execute({ id: 'notexistingid' }))
      .rejects
      .toThrow('User does not exist');
  });
})