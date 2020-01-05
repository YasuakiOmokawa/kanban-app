/* eslint-disable no-unused-vars */
import * as types from './mutation-types'
import { Auth, List, Task } from '../api'
/* eslint-enable no-unused-vars */

export default {
  login: ({ commit }, authInfo) => {
    return Auth.login(authInfo)
      .then(({ token, userId }) => {
        commit(types.AUTH_LOGIN, { token, userId })
      })
      .catch(err => {
        throw err
      })
  },

  fetchLists: ({ commit }) => {
    // TODO:
    throw new Error('fetchLists action should be impremented')
  },

  addTask: ({ commit }) => {
    // TODO:
    throw new Error('addTask action should be impremented')
  },

  updateTask: ({ commit }) => {
    // TODO:
    throw new Error('updateTask action should be impremented')
  },

  removeTask: ({ commit }) => {
    // TODO:
    throw new Error('removeTask action should be impremented')
  },

  logout: ({ commit }) => {
    // TODO:
    throw new Error('logout action should be impremented')
  }
}
