import React, { FC } from 'react'
import styled from 'styled-components'
import { EventType } from '@/interfaces/Event'
import { getButtonLabelName } from '@/utils/buttonLabel'

export type Props = {
  buttonLabelStatus: string
  disabled?: boolean
}

export const SubmitButton: FC<Props> = ({ buttonLabelStatus, disabled }) => {
  return (
    <>
      <Button type="submit" disabled={disabled}>
        {getButtonLabelName(buttonLabelStatus)}
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
  border: none;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: orange;
  border-radius: 10px;

  &:hover {
    box-shadow: -2px -2px 5px white, 2px 2px 5px black;
    transition: 0.3s;
  }

  &:active {
    box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px black;
  }
`
