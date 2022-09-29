import { NAMESPACE, TOKEN } from '@/constants'

interface IStorage {
  [TOKEN]?:string;
}
export function useMyStorage () {
  const storage = useStorage<IStorage>(NAMESPACE, { })
  const clear = () => {
    storage.value = {}
  }
  const getToken = () => {
    return storage.value.token
  }
  const setToken = (value:string) => {
    storage.value.token = value
  }

  return {
    clear,
    getToken,
    setToken
  }
}
