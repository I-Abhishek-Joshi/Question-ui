import { combineReducers } from 'redux'
import toggleLoginModalReducer from './loginModalReducer'
import locationReducer from './locationReducer';
import updateQuestionReducer from './updateQuestionReducer'
import filterReducer from './filterReducer';
import questionListReducer from './questionListReducer';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer.js';

const rootReducer = combineReducers({
    modal: toggleLoginModalReducer,
    location: locationReducer,
    question: updateQuestionReducer,
    filter: filterReducer,
    questionList: questionListReducer,
    user: userReducer,
    notification: notificationReducer,
})

export default rootReducer;