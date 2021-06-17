import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsers.repository";

export class LocalUsersRepository implements IUsersRepository {
  private users: User[] = [];

  findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }
  save(user: User): Promise<void> {
    this.users.push(user);
  }

}