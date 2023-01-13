import { NAMESPACE, TOKEN } from '@/constants'

interface IStorage {
  [TOKEN]?:string;
}
const storage = useStorage<IStorage>(NAMESPACE, { })
const clear = () => {
  storage.value = {}
}
const getStorageItem = (key) => {
  return storage.value[key]
}
const setStorageItem = (key:string,value:string) => {
  storage.value[key] = value
}

export {
  clear,
  getStorageItem,
  setStorageItem,
}
