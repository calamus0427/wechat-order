import { combineReducers } from 'redux'
import counter from './counter'
import {userReducer} from '../reduxs/user.redux'

export default combineReducers({
  counter
})