import axios from 'axios'
import {ERR_OK} from 'api/config'

export const xAxios = axios.create({
  baseURL: '/'
})

const req = (request) => {
  return new Promise((resolve, reject) => {
    request.then(res => {
      const data = res.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      if (!data.errorCode === ERR_OK) {
        return reject(createError(data.errorCode, data.errorMsg))
      }
      resolve(data.data)
    }).catch((err) => {
      const res = err.response
      if (res.status === 404) {
        reject(createError(res.status, 'Not Found'))
      }
    })
  })
}

export function request(request, noCatch) { // 开放noCatch参数给用户自己处理错误
  if (noCatch) {
    return req(request)
  }
  return req(request).catch((err) => { // 统一处理错误
    handleError(err)
  })
}

const createError = (code, msg) => {
  const err = new Error(msg)
  err.code = code
  return err
}

const handleError = (err) => {
  console.log(err)
}
