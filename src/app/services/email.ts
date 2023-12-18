export interface EmailBody {
  name: string,
  replayTo: string,
  message: {
    subject: string,
    message: string,
  }
}
