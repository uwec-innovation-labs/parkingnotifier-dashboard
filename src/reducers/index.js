import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import notifyReducer from './notifyReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  notify: notifyReducer
})
