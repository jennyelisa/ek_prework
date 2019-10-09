import axios from "axios";
const BASEURL = "https://api.estated.com/property/v3?token=";
const APIKEY = "tkjstSNEY8jb3J6rtkrQpc3LMuBzAZ&address=151+Battle+Green+Dr&city=Rochester&state=NY&zipcode=14624";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }

};