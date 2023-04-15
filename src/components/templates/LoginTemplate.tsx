import { useRouter } from 'next/router'
import React, { FC, useState, useCallback } from 'react'
import { loginApi } from '@/api/authApi'
import { LoginForm } from '@/components/molecules/LoginForm'
import { AuthForm } from '@/components/organisms/AuthForm'
import { NAVIGATION_LIST, NAVIGATION_PATH } from '@/constants/navigation'
import { useAuthContext } from '@/contexts/AuthContext'
import { useAuth } from '@/hooks/useAuth'
import { EventType } from '@/interfaces/Event'
import { UserType } from '@/interfaces/User'
import { LinkStatus, LabelName } from '@/utils/constants'

export const LoginTemplate: FC = () => {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <AuthForm>
      <LoginForm
        buttonLabelStatus={LinkStatus.LOGIN}
        email={email}
        password={password}
        changeEmail={handleChangeEmail}
        changePassword={handleChangePassword}
        submit={handleLogin}
      ></LoginForm>
    </AuthForm>
  )
}
