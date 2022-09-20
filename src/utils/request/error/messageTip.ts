import type { AxiosError, AxiosResponse } from 'axios'

interface MessageTipType {
  [key: string | number]: string
}
export const MessageTip: MessageTipType = {
  401: '身份信息过期',
  500: '服务器错误'
}
export const createError = (response: AxiosError | AxiosResponse) => {
  if (response instanceof Error) {
    return {
      ...response.response,
      name: response.config.url,
      message: response.message
    }
  } else {
    const { code } = response.data || {}
    return {
      ...response,
      name: response.config.url as string,
      message: MessageTip[code] || 'error'
    }
  }
}
