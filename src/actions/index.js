({
  babel: true
})

import axios from 'axios'
export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=JUANSALVATORE'
console.log(API_KEY)
export function fetchPosts(params) {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request,
  }
}
