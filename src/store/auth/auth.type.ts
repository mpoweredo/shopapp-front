type TUserData = {
  id: number
  username: string
  email: string
}

type TAuthState = {
  isAuth: boolean
  userData: TUserData | null
}

type TAuthAction = {
  setIsAuth: (isAuth: boolean) => void
  setUserData: (userData: TUserData) => void
  resetAuthState: () => void
}

type TAuthStore = TAuthAction & TAuthState

export type { TAuthAction, TAuthState, TUserData, TAuthStore }
