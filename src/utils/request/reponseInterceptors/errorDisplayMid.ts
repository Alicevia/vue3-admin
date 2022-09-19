import { MessageTip } from '../error/messageTip'
import type { AxiosResponse } from 'axios'

export const errorDisplayMid = async (response: AxiosResponse, next: any) => {
  const { code } = response.data
  console.log('error')
  if (code !== 0) {
    $message.error(MessageTip[code])
  }
  return await next()
}
