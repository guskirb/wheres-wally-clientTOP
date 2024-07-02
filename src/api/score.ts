import axios from "./axios";

export function newScore(data) {
  return axios
    .post("/scores/start", data)
    .then((response) => response.data)
    .catch((error) => error.response);
}

export function updateScore(data, id) {
  return axios
    .post(`/scores/${id}/update`, data)
    .then((response) => response.data)
    .catch((error) => error.response);
}

export function getScores(difficulty: string) {
  return axios
    .get(`/scores?difficulty=${difficulty}`)
    .then((response) => response.data)
    .catch((error) => error.response);
}
