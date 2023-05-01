import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/store/auth/auth'
import { setCookie } from 'cookies-next'
import { TOKEN } from '@/store/auth/auth.const'
import fromUnixTime from 'date-fns/fromUnixTime'
import { signin } from '@/api/auth/signin'
import { TWithSnackbar } from '@/types/api'
import { useRouter } from 'next/router'

type TSigninRes = TWithSnackbar<{
  expires: number
  token: string
}>

const useSignin = () => {
  const router = useRouter()

  return useMutation(signin, {
    onSuccess: ({ data }: { data: TSigninRes }) => {
      const { setIsAuth } = useAuthStore.getState()
      const { token, expires } = data

      router.push('/profile')

      setCookie(TOKEN, `Bearer ${token}`, {
        expires: fromUnixTime(expires),
      })

      setIsAuth(true)
    },
  })
}

export { useSignin }
