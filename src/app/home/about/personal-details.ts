import {environment} from "../../../environments/environment";

export interface PersonalDetail {
  title: string,
  description: string
}

export const DETAILS: PersonalDetail[] = [
  {
    title: 'Birthday',
    description: environment.myBirthday
  },
  {
    title: 'Phone',
    description: environment.myPhone
  },
  {
    title: 'Degree',
    description: 'Bachelor'
  },
  {
    title: 'Email',
    description: environment.myEmail
  },
  {
    title: 'City',
    description: environment.myLocation
  },
  {
    title: 'Test',
    description: 'Testtest'
  },
]
