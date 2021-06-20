import { User } from "../entities/User";

export interface IUsersRepository {
  getAllUsers(): User[];
  findUserById(id: string): User;
  findUserByEmail(email: string): User;
  saveUser(user: User): string;
  editUser(id: string, user: User): void;
  deleteUser(id: string): void;
}