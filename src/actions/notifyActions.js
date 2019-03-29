import axios from 'axios'
import { GET_ERRORS, NOTIFY_USERS } from './types'

export const notifyUsers = messageData => dispatch => {
  axios
    .post('/dashboard/notify', messageData)
    .then(res => {
      dispatch(sendNotification())
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const sendNotification = () => {
  return {
    type: NOTIFY_USERS
  }
}
