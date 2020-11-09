import counterReducer from './counter'
import loggedReducer from './isLogged'

import { combineReducers } from 'redux'

//function with object
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer 
})

export default allReducers

// any name that will allow to call this reducer
// const allReducers = combinedReducers({
//   counterReducer,
//   loggedReducer 
// })