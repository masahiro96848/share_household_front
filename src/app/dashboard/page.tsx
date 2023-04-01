'use client'
import { Button, Container } from '@mui/material'
import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'

const DashBoard: NextPage = () => {
  const router = useRouter()
  const logout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    router.push('/')
  }
  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <p>dashboard</p>
      <Button onClick={logout}>ログアウト</Button>
    </Container>
  )
}

export default DashBoard
