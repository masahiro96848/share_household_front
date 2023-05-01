import {
  Anchor,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useCallback, FC } from 'react'
import { loginApi } from '@/api/authApi'
import { useAuthContext } from '@/contexts/AuthContext'
import { EventType } from '@/interfaces/Event'
import { UserType } from '@/interfaces/User'
import { NAVIGATION_PATH } from '@/utils/constants/navigation'

type Params = {
  login: (user: UserType) => Promise<void>
}

export const LoginTemplate: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login } = useAuthContext()

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

  return (
    <form onSubmit={handleLogin}>
      <TextInput
        mt="md"
        id="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={handleChangeEmail}
      />
      <PasswordInput
        mt="md"
        id="password"
        value={password}
        placeholder="password"
        description="Must be min 5 char"
        onChange={handleChangePassword}
      />
      <Button type="submit" color="cyan">
        ログイン
      </Button>
    </form>
  )
}
