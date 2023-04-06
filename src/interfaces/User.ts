export interface UserType {
  id: number
  nickname: string
  email: string
}

export interface AuthResponseType {
  user: UserType
  accessToken: string
}
