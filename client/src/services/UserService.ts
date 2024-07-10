import axios from 'axios'
import Cookies from 'js-cookie'

const ENDPOINT_PATH_USER = 'https://fishing-net.onrender.com/users'
const ENDPOINT_PATH_LOGIN = 'https://fishing-net.onrender.com/login'

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
    return axios.post(ENDPOINT_PATH_LOGIN, { username: username, password: password })
  },

  register(user: User) {
    return axios.post(ENDPOINT_PATH_USER, user)
  },

  changeUserData(new_user: User, username: string, password: string) {
    return axios.patch(ENDPOINT_PATH_USER + '/' + username, { new_user: new_user, current_password: password })
  },

  deleteUser(username: string) {
    return axios.delete(ENDPOINT_PATH_USER + '/' + username)
  }
}

export default auth
