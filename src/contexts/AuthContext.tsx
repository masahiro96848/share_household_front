import { FC, ReactNode, useContext, createContext } from 'react'
import { LayoutTemplate } from '@/components/templates/common/LayoutTemplate'
import { useAuth } from '@/hooks/useAuth'
import { UserType } from '@/interfaces/User'

type Props = {
  children: ReactNode
}

interface ContextInterface {
  user: UserType | undefined
  isAuth: boolean
  login: (user: UserType) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext({} as ContextInterface)

export const AuthProvider: FC<Props> = ({ children }) => {
  const { user, isAuth, login, signOut } = useAuth()

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        login,
        signOut,
      }}
    >
      <LayoutTemplate>{children}</LayoutTemplate>
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
