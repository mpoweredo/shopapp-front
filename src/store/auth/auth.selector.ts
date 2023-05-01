import { useAuthStore } from './auth'

const selectIsAuth = () => useAuthStore.getState().isAuth

const selectUserData = () => useAuthStore.getState().userData

export { selectIsAuth, selectUserData }
