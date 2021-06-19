import { MailCallerMailProvider } from "./MailCaller.provider";
import axios, { AxiosResponse } from "axios";

const mailProvider = new MailCallerMailProvider();
jest.mock("axios");

describe('testing mail caller provider', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  
  it('should call mail service', () => {
    mockedAxios.post.mockImplementation();
    
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
      body: '<p>Você passou!</p>' 
    };

    mailProvider.sendMail(data);
    expect(axios.post).toBeCalledTimes(1);
    expect(axios.post).toBeCalledWith('http://localhost:6666/send-email', data);
  });
});