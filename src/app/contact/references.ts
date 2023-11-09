import {environment} from "../../environments/environment";

export interface Reference {
  title: string,
  content: string,
  icon: string
}

export const REFERENCES: Reference [] = [
  {
    title: 'Location',
    content: environment.myLocation,
    icon: 'location'
  },
  {
    title: 'Email',
    content: environment.myEmail,
    icon: 'mail-outline'
  },
  {
    title: 'Call',
    content: environment.myPhone,
    icon: 'phone'
  }
]
