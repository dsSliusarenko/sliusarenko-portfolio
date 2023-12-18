import {personalInformation} from "../../personal-information";

export interface PersonalDetail {
  title: string,
  description: string
}

export const DETAILS: PersonalDetail[] = [
  {
    title: 'Main technologies',
    description: 'Angular, TypeScript, NestJS'
  },
  {
    title: 'Phone',
    description: personalInformation.myPhone
  },
  {
    title: 'Degree',
    description: 'Bachelor'
  },
  {
    title: 'Email',
    description: personalInformation.myEmail
  },
  {
    title: 'City',
    description: personalInformation.myLocation
  },
  {
    title: 'Open to',
    description: 'Full time, Contract'
  },
]
