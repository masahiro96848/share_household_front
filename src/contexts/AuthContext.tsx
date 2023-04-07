import { FC, ReactNode, useContext, createContext } from 'react'
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
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
