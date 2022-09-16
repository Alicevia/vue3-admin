import { flow } from 'lodash-es'
import { setParamsData } from './setParamsData'
import { setToken } from './setToken'
import { startAnimation } from './startAnimation'

const requestResolve = flow([startAnimation, setParamsData, setToken])

export { requestResolve }
