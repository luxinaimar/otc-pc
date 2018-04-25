import axios from 'axios'

export function userReg(params) {
  const url = '/oex/user/register'

  return axios.post(url, params).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err.response)
  })
}
