import React, { FC } from 'react'
import styled from 'styled-components'
import { EventType } from '@/interfaces/Event'

type Props = {
  size?: string
  disabled?: boolean
  submit: EventType['onSubmit']
}

export const SubmitButton: FC<Props> = ({ submit, disabled }) => {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault()
        submit
      }}
      disabled={disabled}
    >
      ログイン
    </Button>
  )
}

const Button = styled.button`
  cursor: pointer;
  width: 200px;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  margin: 20px auto;

  &:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px black;
  }

  &:active {
    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px black;
  }
`
