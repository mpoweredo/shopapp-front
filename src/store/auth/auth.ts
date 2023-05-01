import { create } from 'zustand'
import { TAuthAction, TAuthState } from './auth.type'

const initialState = {
  isAuth: false,
  userData: null,
}

const useAuthStore = create<TAuthState & TAuthAction>()((set) => ({
  ...initialState,

  setIsAuth: (isAuth) => set(() => ({ isAuth })),
  setUserData: (userData) => set(() => ({ userData })),

  resetAuthState: () => set(initialState),
}))

export { useAuthStore }
