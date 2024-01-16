import axios from 'axios'

const ENDPOINT_PATH = 'https://dark-khakis-mite.cyclic.app/fishes'

const fish = {
  getFishes() {
    return axios.get(ENDPOINT_PATH)
  },

  getFish(cientific_name: string) {
    return axios.get(ENDPOINT_PATH + '/' + cientific_name)
  }
}

export default fish
