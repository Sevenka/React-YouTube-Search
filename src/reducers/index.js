import { GET_MOVIES_PENDING, GET_MOVIES_FULFILLED, GET_MOVIES_REJECTED } from '../actions'

const initialState = {
  movies: {
    list: [],
    noResults: false,
    pending: false,
    error: false
  }
}

export default function moviesState(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_FULFILLED:
      return { ...state,
        movies: {
          ...state.movies,
          list: action.payload.data.items,
          noResults: !action.payload.data.items.length,
          pending: false,
          error: false
        }
      }
    case GET_MOVIES_PENDING:
      return { ...state,
        movies: { 
          ...state.movies,
          list: [],
          pending: true
        }
      }
    case GET_MOVIES_REJECTED:
      return {...state,
        movies: {
          ...state.movies,
          pending: false,
          error: true
        }
      }
    default:
      return state
  }
}