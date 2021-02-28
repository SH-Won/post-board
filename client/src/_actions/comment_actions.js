import axios from 'axios';
import {
    SAVE_COMMENT,
    GET_COMMENTS,
    DELETE_COMMENT

} from './types';

export function saveComment(variable){
    const request = axios.post('/api/comment/saveComment',variable)
    .then(response=>response.data)

    return{
        type:SAVE_COMMENT,
        payload:request
    }
}
export function getComments(variable){
    const request =axios.post('/api/comment/getComments',variable)
    .then(response=>response.data)
    return{
        type:GET_COMMENTS,
        payload:request
    }
}
export function DeleteComment(variable){
    const request =axios.post('/api/comment/deleteComment',variable)
    .then(response=>response.data)
    return{
        type:DELETE_COMMENT,
        payload:request
    }
}