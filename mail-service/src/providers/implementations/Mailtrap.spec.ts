import { MailTrapMailProvider } from "./Mailtrap.provider";
import nodemailer from 'nodemailer';

const mailProvider = new MailTrapMailProvider();

const testssss = jest.fn();
// jest.mock('nodemailer', () => ({
//   createTransport: jest.fn().mockReturnValue({
//     sendMail: jest.fn().mockReturnValue((mailoptions, callback) => {})
//   })
// }));
jest.mock("nodemailer");
const mockednodemailer = nodemailer as jest.Mocked<typeof nodemailer>;

// mockednodemailer.createTransport.mockReturnValue({ sendMail: jest.fn() });

describe('testing mailtrap provider', () => {
    it('should call mail service', () => {
    
    const data = { 
      to: { 
        name: 'Luiza',
        email: 'luizamendes@gmail.com',
      }, 
      from: {
        name: 'Professor',
        email: 'professor@gmail.com',
      }, 
      subject: 'Parabens',
      body: '<p>Você passou!</p>',
    };
    
    const options = {
      to: {
        name: data.to.name,
        address: data.to.email,
      },
      from: {
        name: data.from.name,
        address: data.from.email,
      },
      subject: data.subject,
      html: data.body,
    }

    mailProvider.sendMail(data);
    expect(test).toBeCalledTimes(1);
  });
});