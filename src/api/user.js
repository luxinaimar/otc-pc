import {request, xAxios} from './request'

export function userReg(params, noCatch) {
  const url = '/oex/user/register'
  return request(xAxios.post(url, params), noCatch)
}
