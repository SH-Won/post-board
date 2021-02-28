import {
    SAVE_COMMENT,
    GET_COMMENTS,
    DELETE_COMMENT
} from '../_actions/types';




export default function(state={},action){
    switch(action.type){
        case SAVE_COMMENT :
            return{
                ...state, comments:[...state.comments,...action.payload.comment]
            }
        case GET_COMMENTS :
            return{
                ...state, comments:[...action.payload.comments]
            }
        case DELETE_COMMENT:
            return{
                ...state, comments:[...action.payload.comments]
            }
        
        default:
            return state;
    }
}