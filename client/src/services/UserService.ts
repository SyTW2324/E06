import axios from 'axios'
import Cookies from 'js-cookie'

const ENDPOINT_PATH = 'http://10.6.128.177:80/server/users'

interface User {
  name: string
  email: string
  username: string
  password: string
}

const auth = {
  setUserLogged(user: string) {
    Cookies.set('userLogged', user)
  },

  getUserLogged() {
    return Cookies.get('userLogged')
  },

  deleteUserLogged() {
    Cookies.remove('userLogged')
  },

  login(username: string, password: string) {
    return axios.post('http://10.6.128.177:80/server/login', { username: username, password: password })
  },

  register(user: User) {
    return axios.post(ENDPOINT_PATH, user)
  },

  changeUserData(new_user: User, username: string, password: string) {
    return axios.patch(ENDPOINT_PATH + '/' + username, { new_user: new_user, current_password: password })
  },

  deleteUser(username: string) {
    return axios.delete(ENDPOINT_PATH + '/' + username)
  }
}

export default auth
