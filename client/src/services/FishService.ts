import axios from 'axios'

const ENDPOINT_PATH = 'http://10.6.128.177:80/server/fishes'

const fish = {
  getFishes() {
    return axios.get(ENDPOINT_PATH)
  },

  getFish(cientific_name: string) {
    return axios.get(ENDPOINT_PATH + '/' + cientific_name)
  }
}

export default fish
