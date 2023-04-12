import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  name: string
}

export const AuthLabel: FC<Props> = ({ name }) => {
  return <LabelText></LabelText>
}

const LabelText = styled.label`
  font-size: 16px;
`
