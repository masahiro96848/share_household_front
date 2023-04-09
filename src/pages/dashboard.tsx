import { useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import { useAuth } from '@/hooks/useAuth'

const Dashboard: NextPage = () => {
  const router = useRouter()
  const { user } = useAuth()

  const logout = async () => {
    await axios.post(`${process.env.BASE_API_URL}/api/auth/logout`)
    router.push('/')
  }

  return (
    <Layout title="dashboard">
      <p>{user?.email}</p>
      <p>テスト</p>
    </Layout>
  )
}

export default Dashboard
