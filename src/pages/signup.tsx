import {
  Anchor,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as Yup from 'yup'
import { Layout } from '@/components/Layout'
import { SignUpForm } from '@/types/auth'

/**
 * バリデーションのロジック
 */
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('No email provided'),
  password: Yup.string()
    .required('No password provided')
    .min(5, 'Password should be min 5 chars'),
})

const Signup: NextPage = () => {
  const router = useRouter()
  const [error, setError] = useState('')
  const form = useForm<SignUpForm>({
    validate: yupResolver(schema),
    initialValues: {
      nickname: '',
      email: '',
      password: '',
    },
  })

  const handleSubmit = async () => {
    try {
      await axios.post(`${process.env.BASE_API_URL}/api/auth/signup`, {
        nickname: form.values.nickname,
        email: form.values.email,
        password: form.values.password,
      })
      form.reset()
      router.push('/dashboard')
    } catch (e: any) {
      console.log(e)
    }
  }
  return (
    <Layout title="auth">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          mt="md"
          id="nickname"
          label="nickname"
          placeholder="ニックネーム"
          {...form.getInputProps('nickname')}
        />
        <TextInput
          mt="md"
          id="email"
          label="Email*"
          placeholder="example@gmail.com"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          mt="md"
          id="password"
          label="Password*"
          placeholder="password"
          description="Must be min 5 char"
          {...form.getInputProps('password')}
        />
        <Button type="submit" color="cyan"></Button>
      </form>
    </Layout>
  )
}

export default Signup
