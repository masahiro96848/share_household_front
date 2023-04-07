import type { AxiosResponse } from 'axios'
import globalAxios, {
  isAxiosError,
  ResponseType,
  IErrorResponse,
} from '@/api/config'
import { AuthResponseType } from '@/interfaces/User'

/**
 * ログインAPI
 * @param email
 * @param password
 * @returns
 */
export const loginApi = async (email: string, password: string) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      'auth/login',
      {
        email,
        password,
      },
    )
    const res: ResponseType<AuthResponseType> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}

/**
 * 新規登録API
 * @param nickname
 * @param email
 * @param password
 * @returns
 */
export const registerApi = async (
  nickname: string,
  email: string,
  password: string,
) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      'auth/register',
      {
        nickname,
        email,
        password,
      },
    )
    const res: ResponseType<AuthResponseType> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}

/**
 * 認証チェックAPI
 * @returns
 */
export const authenticationApi = async () => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      '/auth/authentication/',
    )
    const res: ResponseType<AuthResponseType> = {
      code: 200,
      data,
    }
    return res
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    }
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse
      res.code = axiosError.response.status
      res.message = axiosError.response.data.message
    }
    return res
  }
}
