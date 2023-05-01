import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '@/store/auth/auth'
import { TUserData } from '@/store/auth/auth.type'
import { deleteCookie } from 'cookies-next'
import { TOKEN } from '@/store/auth/auth.const'
import { getGeneralAuthData } from '@/api/auth/getGeneralAuthData'
import { selectIsAuth, selectUserData } from '@/store/auth/auth.selector'
import { NextRouter, useRouter } from 'next/router'

const AUTH_QUERY_KEY = 'generalAuthData'

const useGetGeneralAuthData = () => {
  const router = useRouter()

  return useQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: getGeneralAuthData,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
    enabled: selectIsAuth() && !selectUserData(),
    onSuccess: ({ data }: { data: TUserData }) => {
      const { setUserData } = useAuthStore.getState()

      setUserData(data)
    },
    onError: () => {
      const { resetAuthState } = useAuthStore.getState()

      router.push('/signin')

      deleteCookie(TOKEN)
      resetAuthState()
    },
  })
}

export { useGetGeneralAuthData }
