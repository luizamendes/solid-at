import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsers.repository";

export class LocalUsersRepository implements IUsersRepository {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  findUserByEmail(email: string): User {
    return this.users.find(user => user.email === email);
  }
  
  saveUser(user: User): void {
    this.users.push(user);
  }
  
  editUser(id: string, user: User): void {
    this.users = this.users.map(usr => {
      if (usr.id === id) {
        return usr = user;
      }
    });
  }

  deleteUser(id: string): void {
    this.users = this.users.filter(usr => usr.id !== id);
  }
}