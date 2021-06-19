import { User } from "../entities/User";

export interface IUsersRepository {
  getAllUsers(): User[];
  findUserByEmail(email: string): User;
  saveUser(user: User): void;
  editUser(id: string, user: User): void;
  deleteUser(id: string): void;
}