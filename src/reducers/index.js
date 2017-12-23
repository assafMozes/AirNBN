import { combineReducers } from 'redux'
import counter from './counter'
import dataCruncher from './dataCruncher'
import guestNum from './guestNum'
import cityLetters from './cityLetters'

const rootReducer = combineReducers({
  counter,
  //place other reducers here...
  dataCruncher,
  guestNum,
  cityLetters
})

export default rootReducer

