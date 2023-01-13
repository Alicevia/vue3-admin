import { NAMESPACE ,TOKEN_SYMBOL } from '@/constants'


interface IStorage {
  [key:string]:any;
}
const storage = useStorage<IStorage>(NAMESPACE, { })
const clearStorage = () => {
  storage.value = {}
}
const getStorageItem = (key:symbol) => {
  return storage.value[Symbol.keyFor(key)]
}
const setStorageItem = <T>(key:symbol,value:T) => {
  storage.value[Symbol.keyFor(key)] = value
}
const getToken =() => getStorageItem(TOKEN_SYMBOL)
const setToken =(value:string) => setStorageItem(TOKEN_SYMBOL,value)


export {
  clearStorage,
  getToken,
  setToken,
  getStorageItem,
  setStorageItem,
}
