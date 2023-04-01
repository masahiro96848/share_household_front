'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Container, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { SignInForm, SignUpForm } from '@/app//types/auth'

// バリデーションルール
const schema = yup.object({
  nickname: yup.string().required('必須です。').max(10, '最大10文字までです。'),
  email: yup
    .string()
    .required('必須です')
    .email('正しいメールアドレスを入力してください'),
  password: yup
    .string()
    .required('必須です')
    .min(6, '6文字以上入力してください'),
})

const Home: NextPage = () => {
  const router = useRouter()
  const [isRegister, setIsResister] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
  })

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        nickname: data.nickname,
        email: data.email,
        password: data.password,
      })
      router.push('/dashboard')
    } catch (e: any) {
      setError(e.response.data.message)
    }
  }
  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField required label="ニックネーム" {...register('nickname')} />
        <TextField
          required
          label="メールアドレス"
          type="email"
          {...register('email')}
          error={'email' in errors}
          helperText={errors.email?.message}
        />
        <TextField
          required
          label="パスワード"
          type="password"
          {...register('password')}
          error={'password' in errors}
          helperText={errors.password?.message}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </Stack>
    </Container>
  )
}

export default Home
