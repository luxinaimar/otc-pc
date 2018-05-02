import {request, xAxios} from './request'

export function userReg(params, noCatch) {
  const url = '/oex/user/register'
  return request(xAxios.post(url, params), noCatch)
}

export function userLog(params, noCatch) {
  const url = '/oex/user/login'
  return request(xAxios.post(url, params), noCatch)
}

export function userResetPwdByPhone(params, noCatch) {
  const url = '/oex/user/resetPwdByPhone'
  return request(xAxios.post(url, params), noCatch)
}

export function userSmsCode(params, noCatch) {
  const url = '/oex/user/sms_code'
  return request(xAxios.post(url, params), noCatch)
}
