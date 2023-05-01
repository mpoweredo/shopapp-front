import Axios from 'axios'
import { getCookie } from 'cookies-next'
import { TOKEN } from '@/store/auth/auth.const'

const baseURL = 'http://127.0.0.1:3001/'

export const axiosInstance = Axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    Authorization: getCookie(TOKEN),
    'Content-Type': 'application/json',
  },
})
