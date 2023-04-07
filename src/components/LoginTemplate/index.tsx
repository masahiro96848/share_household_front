import {
  Anchor,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import Link from 'next/link'
import { FC } from 'react'
import { Layout } from '../Layout'
import { useLoginTemplate } from './useLoginTemplate'
import { NAVIGATION_LIST } from '@/constants/navigation'
import { useAuthContext } from '@/contexts/AuthContext'

export const LoginTemplate: FC = () => {
  const { login } = useAuthContext()
  const [
    { email, password },
    { handleChangeEmail, handleChangePassword, handleLogin },
  ] = useLoginTemplate({ login })

  return (
    <Layout title="auth">
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
    </Layout>
  )
}
