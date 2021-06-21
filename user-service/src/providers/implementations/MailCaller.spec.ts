import axios from "axios";
import { MailCallerMailProvider } from "./MailCaller.provider";
import { IGeneralMessage } from "../IMail.provider";

const mailProvider = new MailCallerMailProvider();
jest.mock("axios");

describe('testing mail caller provider', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  
  afterEach(() => {
    jest.clearAllMocks();
  });

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

    const { to, ...message } = data;
    mailProvider.sendMailToList(message as IGeneralMessage);
    expect(axios.post).toBeCalledTimes(1);
    expect(axios.post).toBeCalledWith('http://localhost:6666/send-email-list', message);
  });
});