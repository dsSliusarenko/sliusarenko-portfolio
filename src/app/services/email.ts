export interface EmailBody {
  name: string,
  replyto: string,
  message: {
    subject: string,
    message: string,
  }
}
