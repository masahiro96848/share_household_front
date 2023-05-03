import React, { FC } from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  space?: string
}

export const FormTitle: FC<Props> = ({ title, space }) => {
  const spaceSize = space ? space : 'default'
  return (
    <TitleArea space={spaceSize}>
      <h3>{title}</h3>
    </TitleArea>
  )
}

type StyleProps = {
  space: string
}

const TitleArea = styled.div`
  /* ${({ space }: StyleProps) => getPadding(space)} */
  text-align: center;
  h3 {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }
`

// FormTitleのpaddingを調整する
const getPadding = (space: string): string => {
  switch (space) {
    case 'sm':
      return 'padding: 20px 40px;'
    default:
      return 'padding: 30px 60px;'
  }
}
