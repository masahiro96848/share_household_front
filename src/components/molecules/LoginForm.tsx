import { type } from 'os'
import {
  Anchor,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import { FormTitle } from '@/components/atoms/FormTitle'
import { SubmitButton } from '@/components/atoms/button/SubmitButton'
import { InputForm } from '@/components/atoms/input/InputForm'
import { EventType } from '@/interfaces/Event'

export type Props = {
  email: string
  password: string
  buttonLabelStatus: string
  changeEmail: EventType['onChangeInput']
  changePassword: EventType['onChangeInput']
  submit: EventType['onSubmit']
}

export const LoginForm: FC<Props> = ({
  email,
  password,
  buttonLabelStatus,
  changeEmail,
  changePassword,
  submit,
}) => {
  return (
    <form onSubmit={submit}>
      <TextInput
        mt="md"
        id="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={changeEmail}
      />
      <PasswordInput
        mt="md"
        id="password"
        value={password}
        placeholder="password"
        description="Must be min 5 char"
        onChange={changePassword}
      />
      <SubmitButton buttonLabelStatus={buttonLabelStatus} />
    </form>
  )
}

const Form = styled.form`
  text-align: center;
  padding: 40px 50px;
  border-bottom: 1px solid #dddbdb;
  input[type='password'] {
    margin-top: 60px;
  }
  button[type='submit'] {
    margin: 60px auto;
  }
`

const AuthForm = styled.div`
  text-align: center;
`
