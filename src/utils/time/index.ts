import { useDateFormat, useNow } from '@vueuse/core'


export const baseTime = useDateFormat(useNow(), 'YYYY年MM月DD日 HH:mm:ss')
