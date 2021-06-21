export interface INotifyAllUsersRequestDTO {
  from: { name: string, email: string },
  subject: string,
  body: string,
}