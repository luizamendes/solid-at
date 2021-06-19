import { User } from "../../entities/User";
const { LocalUsersRepository: repository } = require("./LocalUsers.repository");

const userRepository = new repository();

describe('Testing Local User repository', () => {
  it('should start empty', () => {
    expect(userRepository.getAllUsers()).toHaveLength(0);
  });
  
  it('should add user and find it', () => {
    userRepository.saveUser(new User({ name: 'Luiza', email: 'luiza@gmail.com', password: '2122' }));

    expect(userRepository.getAllUsers()).toHaveLength(1);
    expect(userRepository.findUserByEmail('luiza@gmail.com')).toBeTruthy();
  });
  
  it('should edit user', () => {
    const firstUser: User = userRepository.findUserByEmail('luiza@gmail.com');

    userRepository.editUser(firstUser.id, new User({ name: 'Luiza', email: 'luizamendes@gmail.com', password: '2122' }));
    expect(userRepository.findUserByEmail('luizamendes@gmail.com')).toBeTruthy();
    expect(userRepository.findUserByEmail('luiza@gmail.com')).toBeFalsy();
  });
})
