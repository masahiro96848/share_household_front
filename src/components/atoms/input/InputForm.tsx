import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  type: string
  comment: string
  value: string | number
  length?: number
  onChange: (e: any) => void
}

export const InputForm: FC<Props> = ({
  type,
  comment,
  value,
  length,
  onChange,
}) => {
  const maxLen = length ? length : 255
  return (
    <Input
      type={type}
      maxLength={maxLen}
      placeholder={comment}
      value={value}
      onChange={onChange}
    ></Input>
  )
}

const Input = styled.input`
  padding: 15px 15px;
  font-size: 1rem;
  border-radius: 20px;
  border: 2px solid #040404;
  width: 60%;
  font-size: 24px;
`
