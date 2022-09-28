export interface LoginParams {
  password: string;
  username: string
}
export type LoginData = string
export interface UserInfoData {
  account?: string;
  age?: number
  name?:string
}

export type ValidateTokenData=boolean
