import { GET_MOVIES } from '../actions'

const initialState = {
  movies: {
    list: []
  }
}

export default function moviesState(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state,
        movies: {
          ...state.movies,
          list: action.payload.data.items
        }
      }
    default:
      return state
  }
}