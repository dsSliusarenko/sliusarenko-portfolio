import {personalInformation} from "../../personal-information";

export interface Reference {
  title: string,
  content: string,
  icon: string
}

export const REFERENCES: Reference [] = [
  {
    title: 'Location',
    content: personalInformation.myLocation,
    icon: 'location'
  },
  {
    title: 'Email',
    content: personalInformation.myEmail,
    icon: 'mail-outline'
  },
  {
    title: 'Call',
    content: personalInformation.myPhone,
    icon: 'phone'
  }
]
