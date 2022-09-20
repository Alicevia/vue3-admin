import { MessageTip } from '../error/messageTip'
import type { AxiosResponse } from 'axios'

export const endAnimation = async (response: AxiosResponse, next: any) => {
  $loadingBar?.finish()

  const { code } = response.data
  if (code !== 0) {
    $message.error(MessageTip[code])
  }
  return await next()
}
