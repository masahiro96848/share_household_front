import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import { loginApi } from '@/api/authApi'
import { NAVIGATION_PATH } from '@/constants/navigation'
import { EventType } from '@/interfaces/Event'
import { UserType } from '@/interfaces/User'

type Params = {
  login: (user: UserType) => Promise<void>
}

type StatesType = {
  email: string
  password: string
}

type ActionsType = {
  handleChangeEmail: EventType['onChangeInput']
  handleChangePassword: EventType['onChangeInput']
  handleLogin: EventType['onSubmit']
}

export const useLoginTemplate = ({ login }: Params) => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  /**
   * email更新処理
   */
  const handleChangeEmail: EventType['onChangeInput'] = useCallback(
    (event) => setEmail(event.target.value),
    [],
  )

  /**
   * password更新処理
   */
  const handleChangePassword: EventType['onChangeInput'] = useCallback(
    (event) => setPassword(event.target.value),
    [],
  )

  /**
   * ログイン処理
   */
  const handleLogin: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault()
      const res = await loginApi(email, password)

      if (res?.code === 401) {
        return
      }
      if (res?.data?.user) {
        login(res.data.user)
        localStorage.setItem('access_token', res.data.accessToken)
        router.push(NAVIGATION_PATH.DASHBOARD)
      }
    },
    [email, password, login, router],
  )

  const states: StatesType = {
    email,
    password,
  }

  const actions: ActionsType = {
    handleChangeEmail,
    handleChangePassword,
    handleLogin,
  }

  return [states, actions] as const
}
