import axios from 'axios'

const ENDPOINT_PATH = 'http://10.6.128.177:80/server/fishes'

const fish = {
  getFishes() {
    return axios.get(ENDPOINT_PATH)
  }
}

export default fish
