import { getCookie } from 'cookies-next'
import { TOKEN } from '@/store/auth/auth.const'
import { axiosInstance } from '../axios'

const getGeneralAuthData = async () => {
  return await axiosInstance.get('auth/generalData', {
    headers: {
      Authorization: getCookie(TOKEN),
    },
  })
}

export { getGeneralAuthData }
