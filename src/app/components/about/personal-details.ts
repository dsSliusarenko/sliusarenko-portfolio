import {personalInformation} from "../../personal-information";

export interface PersonalDetail {
  title: string,
  description: string
}

export const DETAILS: PersonalDetail[] = [
  {
    title: 'Birthday',
    description: personalInformation.myBirthday
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
    title: 'Test',
    description: 'Testtest'
  },
]
