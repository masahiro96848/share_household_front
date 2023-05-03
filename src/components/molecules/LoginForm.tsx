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
    <Form onSubmit={submit}>
      <FormTitle title="ログイン" />
      <TextInput
        size="lg"
        mt="md"
        id="email"
        value={email}
        placeholder="example@gmail.com"
        label="Email"
        onChange={changeEmail}
      />
      <PasswordInput
        size="lg"
        mt="lg"
        id="password"
        value={password}
        placeholder="password"
        label="Password"
        onChange={changePassword}
      />
      <SubmitButton buttonLabelStatus={buttonLabelStatus} />
    </Form>
  )
}

const Form = styled.form`
  padding: 40px 50px;
  /* border-bottom: 1px solid #dddbdb; */
  margin: 0 auto;
`
