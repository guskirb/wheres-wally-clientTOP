import axios from "./axios";

export function getCharacters(difficulty: string) {
  return axios
    .get(`/characters?difficulty=${difficulty}`)
    .then((response) => response.data.characters)
    .catch((error) => error.response);
}
