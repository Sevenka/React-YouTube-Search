import axios from 'axios'

export const GET_MOVIES = 'GET_MOVIES'

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = "AIzaSyBnqKQlcYQ4V-KjwDtQ3C1mOSuq12z0BWU"

export function getMovies(term = null) {
  let params = {
    part: 'snippet',
    key: API_KEY,
    maxResults: 10,
    q: term,
    type: 'video'
  }
  const request = axios.get(YOUTUBE_URL, { params: params })
  return {
    type: 'GET_MOVIES',
    payload: request
  }
}