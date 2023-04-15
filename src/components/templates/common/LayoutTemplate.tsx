import { AppShell, Navbar, Header, Footer } from '@mantine/core'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export const LayoutTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <StyledNavbar width={{ base: 250 }} height={900} p="xs">
          <StyledNavbarSection>Home</StyledNavbarSection>
          <StyledNavbarSection>カレンダー</StyledNavbarSection>
          <StyledNavbarSection>経費を入力</StyledNavbarSection>
          <StyledNavbarSection>統計データ</StyledNavbarSection>
        </StyledNavbar>
      }
      header={
        <StyledHeader height={80} p="xs">
          <Navbar.Section>テスト1</Navbar.Section>
        </StyledHeader>
      }
      //   footer={
      //     <Footer height={80} p="xs">
      //       {}
      //     </Footer>
      //   }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  )
}

export const StyledHeader = styled(Header)`
  background-color: #eec58b;
`

export const StyledFooter = styled(Footer)`
  background-color: #ffffff;
`

export const StyledNavbar = styled(Navbar)`
  padding-top: 40px;
  text-align: center;
`

export const StyledNavbarSection = styled(Navbar.Section)`
  font-size: 24px;
  margin-bottom: 60px;
`
