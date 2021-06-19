import { User } from "../../entities/User";
const { LocalUsersRepository } = require('./LocalUsers.repository');

const userRepository = new LocalUsersRepository();

describe('Testing Local User repository', () => {
  beforeEach(() => {
    userRepository.users = [];
    userRepository.saveUser(new User({ name: 'Luiza', email: 'luiza@gmail.com', password: '2122' }));
  });
  
  it('should add user and find it', () => {
    userRepository.saveUser(new User({ name: 'Luiza', email: 'teste@gmail.com', password: '2122' }));

    expect(userRepository.getAllUsers()).toHaveLength(2);
    expect(userRepository.findUserByEmail('teste@gmail.com')).toBeTruthy();
  });
  
  it('should edit user', () => {
    const firstUser: User = userRepository.findUserByEmail('luiza@gmail.com');

    userRepository.editUser(firstUser.id, new User({ name: 'Luiza Leite', email: 'testando@gmail.com', password: '090909' }));
    const newUser = userRepository.findUserByEmail('testando@gmail.com');

    expect(newUser).toBeTruthy();
    expect(newUser.name).toBe('Luiza Leite');
    expect(newUser.password).toBe('090909');
    expect(userRepository.findUserByEmail('testando@gmail.com')).toBeTruthy();
    expect(userRepository.findUserByEmail('luiza@gmail.com')).toBeFalsy();
  });
  
  it('should remove user', () => {
    const firstUser: User = userRepository.findUserByEmail('luiza@gmail.com');

    userRepository.deleteUser(firstUser.id);
    expect(userRepository.findUserByEmail('luiza@gmail.com')).toBeFalsy();
  });
})
