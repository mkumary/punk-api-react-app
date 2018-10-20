import client from "./client";
import { URL } from "../constants/Constants";

export default {
  get(url) {
    return new Promise((resolve, reject) => {
      client.get(url).then(response => {
        if (response && response.status === 200) {
          resolve(response.data);
        } else {
          reject(response);
        }
      });
    });
  },
  getRandomBeer() {
    return this.get(URL.GET_RANDOM_BEER);
  },
  getRandomNonAlcoholicBeer() {
    return this.get(URL.GET_RANDOM_NON_ALCOHOLIC_BEER);
  },
  searchByName(searchText) {
    return this.get(URL.SEARCH_TEXT + "" + searchText);
  },
  searchByDescription(descriptiveText) {
    return this.get(URL.DESCRIPTION_TEXT + "" + descriptiveText);
  }
};
