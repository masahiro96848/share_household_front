import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const AuthForm: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()

  return (
    <AuthFormArea>
      <FormArea>{children}</FormArea>
    </AuthFormArea>
  )
}

const AuthFormArea = styled.div`
  width: 100%;
  padding-top: 100px;
`

const FormArea = styled.div`
  min-height: 400px;
  width: 50%;
  border-radius: 20px;
  background-color: #ffffff;
  margin: 0 auto;
`
