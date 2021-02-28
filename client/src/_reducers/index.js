import { combineReducers } from 'redux';
import user from './user_reducer';
import upload from './product_reducer';
import favorite from './favorite_reducers';
import comment from './comment_reducers';

const rootReducer = combineReducers({
    user,
    upload,
    favorite,
    comment
});

export default rootReducer;