import React, { FC } from 'react'
import styled from 'styled-components'
import { EventType } from '@/interfaces/Event'
import { getLabelName } from '@/utils/buttonLabel'

export type Props = {
  labelStatus: string
  disabled?: boolean
  submit: EventType['onSubmit']
}

export const SubmitButton: FC<Props> = ({ labelStatus, disabled, submit }) => {
  return (
    <>
      <Button
        disabled={disabled}
        onClick={(e) => {
          e.preventDefault()
          submit
        }}
      >
        {getLabelName(labelStatus)}
      </Button>
    </>
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
  margin: 40px auto;

  &:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px black;
  }

  &:active {
    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px black;
  }
`
