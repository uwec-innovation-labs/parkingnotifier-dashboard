import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_SUPERUSER, SUPERUSER_LOADING } from './types'
// Register Superuser
export const registerSuperuser = (superuserData, history) => dispatch => {
  axios
    .post('/dashboard/superusers/register', superuserData)
    .then(res => history.push('/login')) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
// Login - get superusers token
export const loginSuperuser = superuserData => dispatch => {
  axios
    .post('/dashboard/superusers/login', superuserData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get superuser data
      const decoded = jwt_decode(token)
      // Set current superuser
      dispatch(setCurrentSuperuser(decoded))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
// Set logged in superuser
export const setCurrentSuperuser = decoded => {
  return {
    type: SET_CURRENT_SUPERUSER,
    payload: decoded
  }
}
// Superuser loading
export const setSuperuserLoading = () => {
  return {
    type: SUPERUSER_LOADING
  }
}
// Log superuser out
export const logoutSuperuser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentSuperuser({}))
}
