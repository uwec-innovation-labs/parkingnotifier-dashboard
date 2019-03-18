import { NOTIFY_USERS } from '../actions/types'

const initialState = {
  notificationSent: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_USERS:
      return {
        ...state,
        notificationSent: true // this will have to be updated to reflect actual success
      }
    default:
      return state
  }
}
