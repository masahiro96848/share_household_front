import React, { FC } from 'react'
import styled from 'styled-components'
import { getFormLabelName } from '@/utils/formLabel'

export type Props = {
  formLabelStatus: string
}

export const AuthLabel: FC<Props> = ({ formLabelStatus }) => {
  return <LabelText>{getFormLabelName(formLabelStatus)}</LabelText>
}

const LabelText = styled.label`
  font-size: 16px;
`
