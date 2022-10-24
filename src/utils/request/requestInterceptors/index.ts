import { flow } from 'lodash-es'
import { setCancelRequest } from './setCancelRequest'
import { setParamsData } from './setParamsData'
import { setToken } from './setToken'
import { startAnimation } from './startAnimation'

const requestResolve = flow([startAnimation, setParamsData, setToken, setCancelRequest])

export { requestResolve }
