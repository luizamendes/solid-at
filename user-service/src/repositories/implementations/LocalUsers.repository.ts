import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsers.repository";

export class LocalUsersRepository implements IUsersRepository {
  private users: User[] = [];
  
  getAllUsers(): User[] {
    return this.users;
  }

  findUserByEmail(email: string): User {
    const user = this.users.find(user => user.email === email);
    
    return user; 
  }
  
  saveUser(user: User): void {
    this.users.push(user);
  }
  
  editUser(id: string, user: User): void {
    console.log(this.users);
    this.users.find(usr => {
      if (usr.id === id) {
        usr = user;
        return;
      }
    });
    console.log(this.users);
  }

  deleteUser(id: string): void {
    this.users.filter(usr => usr.id === id);
  }
}