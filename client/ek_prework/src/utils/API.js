import axios from 'axios'

export default {
  search: function(data) {
    const { search, city, state, zip } = data
    const APIKEY = 'tkjstSNEY8jb3J6rtkrQpc3LMuBzAZ'
    const baseUrl = `https://api.estated.com/property/v3`
    const query = `?token=${APIKEY}&address=${search}&city=${city}&state=${state}&zipcode=${zip}`

    return axios.get(baseUrl + query)
  }
}
