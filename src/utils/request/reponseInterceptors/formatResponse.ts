import type { AxiosResponse } from 'axios'

export const formatResponse = async (response: AxiosResponse) => {
  console.log('sd')
  return response.data
}
