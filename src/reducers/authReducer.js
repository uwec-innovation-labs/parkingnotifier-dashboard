import { SET_CURRENT_SUPERUSER, SUPERUSER_LOADING } from '../actions/types'
const isEmpty = require('is-empty')
const initialState = {
  isAuthenticated: false,
  superuser: {},
  loading: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SUPERUSER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        superuser: action.payload
      }
    case SUPERUSER_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
