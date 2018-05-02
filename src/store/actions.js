import {SET_USER} from './mutation-types'
import {userReg, userLog} from 'api/user'

export function userRegister({commit}, param) {
  return userReg(param).then((res) => {
    commit(SET_USER, res)
  }).catch(e => {
    console.log(e)
  })
}

export function userLogin({commit}, param) {
  return userLog(param).then((res) => {
    commit(SET_USER, res)
  }).catch(e => {
    console.log(e)
  })
}
