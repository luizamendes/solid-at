const { MailTesterMailProvider } = require("../../providers/implementations/MailTester.provider");
const { LocalUsersRepository } = require("../../repositories/implementations/LocalUsers.repository");
import { NotifyAllUsersUseCase } from "./notifyAllUsers.useCase";

const mailTesterProvider = new MailTesterMailProvider();
const localUserRepository = new LocalUsersRepository();

const notifyAllUsersUseCase = new NotifyAllUsersUseCase(localUserRepository, mailTesterProvider);

describe('Testando envio de email em massa', () => {
  it('should get error when no user is on database', async () => {
    await expect(notifyAllUsersUseCase.execute({ from: {name: 'Luiza', email: 'teste@gmail.com'}, subject: 'Mass email', body: '<p>Ola!</p>' }))
      .rejects
      .toThrow('Database is empty');
  });
})