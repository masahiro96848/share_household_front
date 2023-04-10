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
import { SubmitButton } from '@/components/atoms/button/SubmitButton'
import { InputText } from '@/components/atoms/input/InputForm'
import { EventType } from '@/interfaces/Event'

export type Props = {
  email: string
  password: string
  changeEmail: EventType['onChangeInput']
  changePassword: EventType['onChangeInput']
  submit: EventType['onSubmit']
}

export const LoginForm: FC<Props> = ({
  email,
  password,
  changeEmail,
  changePassword,
  submit,
}) => {
  return (
    <Form>
      <InputText
        type="email"
        value={email}
        onChange={(event) => {
          return changeEmail(event)
        }}
      />
      <InputText
        type="password"
        value={password}
        onChange={(event) => {
          return changePassword(event)
        }}
      />
      <SubmitButton submit={() => submit} />
    </Form>
  )
}

const Form = styled.form`
  text-align: center;
  padding: 100px 60px;
  border-bottom: 1px solid #dddbdb;
  input[type='password'] {
    margin-top: 40px;
  }
`
