import { combineReducers } from 'redux'
import toggleLoginModalReducer from './loginModalReducer'
import locationReducer from './locationReducer';
import updateQuestionReducer from './updateQuestionReducer'
import searchReducer from './searchReducer';
import questionListReducer from './questionListReducer';

const rootReducer = combineReducers({
    modal: toggleLoginModalReducer,
    location: locationReducer,
    question: updateQuestionReducer,
    search: searchReducer,
    questionList: questionListReducer
})

export default rootReducer;