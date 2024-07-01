import axios from "./axios";

export function getCharacters(difficulty) {
  return axios
    .get(`/characters?difficulty=${difficulty}`)
    .then((response) => response.data)
    .catch((error) => error.response);
}
