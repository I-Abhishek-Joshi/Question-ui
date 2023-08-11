import { combineReducers } from 'redux'
import toggleLoginModalReducer from './loginModalReducer'
import locationReducer from './locationReducer';
import updateQuestionReducer from './updateQuestionReducer'
import filterReducer from './filterReducer';
import questionListReducer from './questionListReducer';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer.js';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
    modal: toggleLoginModalReducer,
    location: locationReducer,
    question: updateQuestionReducer,
    filter: filterReducer,
    questionList: questionListReducer,
    user: userReducer,
    notification: notificationReducer,
    loader: loaderReducer
})

export default rootReducer;