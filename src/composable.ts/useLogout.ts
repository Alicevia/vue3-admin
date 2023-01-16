import { userService } from '@/api'
export const useLogout = () => {
  const router = useRouter()
  const isLoading = ref(false)
  const logout =async () => {
    await userService.logout()
  }

  return { logout,isLoading }
}