import { useMutation } from '@tanstack/react-query'
import { signup } from '@/api/auth/signup'
import { setCookie } from 'cookies-next'
import { TWithSnackbar } from '@/types/api'
import { useAuthStore } from '@/store/auth/auth'
import fromUnixTime from 'date-fns/fromUnixTime'
import { TOKEN } from '@/store/auth/auth.const'
import { useRouter } from 'next/router'

type TSignupRes = TWithSnackbar<{
  expires: number
  token: string
}>

const useSignup = () => {
  const router = useRouter()

  return useMutation(signup, {
    onSuccess: ({ data }: { data: TSignupRes }) => {
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

export { useSignup }
