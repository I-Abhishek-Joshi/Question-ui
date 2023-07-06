import { combineReducers } from 'redux'
import toggleLoginModalReducer from './loginModalReducer'
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
    toggleLoginModalReducer,
    locationReducer
})

export default rootReducer;