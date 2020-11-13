import { combineReducers } from "redux";

import droidsReducer from './app/droids/duck'
import droidsClassReducer from './app/droidClasses/duck'

const rootReducer = combineReducers({
    droids: droidsReducer,
    classes: droidsClassReducer
})

export default rootReducer