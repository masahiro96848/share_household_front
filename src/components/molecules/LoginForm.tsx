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
  labelStatus: string
  email: string
  password: string
  changeEmail: EventType['onChangeInput']
  changePassword: EventType['onChangeInput']
  submit: EventType['onSubmit']
}

export const LoginForm: FC<Props> = ({
  labelStatus,
  email,
  password,
  changeEmail,
  changePassword,
  submit,
}) => {
  return (
    <Form>
      <FormTitle title="ログイン" />
      <InputForm
        type="email"
        value={email}
        onChange={(event) => {
          return changeEmail(event)
        }}
      />
      <InputForm
        type="password"
        value={password}
        onChange={(event) => {
          return changePassword(event)
        }}
      />
      <SubmitButton labelStatus={labelStatus} submit={() => submit} />
    </Form>
  )
}

const Form = styled.form`
  text-align: center;
  padding: 40px 50px;
  border-bottom: 1px solid #dddbdb;
  input[type='password'] {
    margin-top: 40px;
  }
`
