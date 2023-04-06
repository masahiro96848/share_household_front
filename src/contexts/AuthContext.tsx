import { FC, ReactNode, useContext, createContext } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { UserType } from '@/interfaces/User'

type Props = {
  children: ReactNode
}

interface ContextInterface {
  user: UserType | undefined
  isAuth: boolean
  signIn: (user: UserType) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext({} as ContextInterface)

export const AuthProvider: FC<Props> = ({ children }) => {
  const { user, isAuth, signIn, signOut } = useAuth()

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
