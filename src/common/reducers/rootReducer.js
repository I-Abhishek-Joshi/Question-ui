import { combineReducers } from 'redux'
import toggleLoginModalReducer from './loginModalReducer'
import locationReducer from './locationReducer';
import updateQuestionReducer from './updateQuestionReducer'

const rootReducer = combineReducers({
    modal: toggleLoginModalReducer,
    location: locationReducer,
    question: updateQuestionReducer
})

export default rootReducer;