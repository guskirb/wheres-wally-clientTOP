import axios from "./axios";

export function newScore(data: any) {
  return axios
    .post("/scores/start", data)
    .then((response) => response.data.score)
    .catch((error) => error.response);
}

export function updateScore(id: string) {
  return axios
    .post(`/scores/${id}/end`)
    .then((response) => response.data.score)
    .catch((error) => error.response);
}

export function updateScoreName(data: any, id: string) {
  return axios
    .post(`/scores/${id}/name`, data)
    .then((response) => response.data)
    .catch((error) => error.response);
}

export function getScores(difficulty: string) {
  return axios
    .get(`/scores?difficulty=${difficulty}`)
    .then((response) => response.data.scores)
    .catch((error) => error.response);
}
