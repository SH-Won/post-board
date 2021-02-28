

import {
    GET_LIKE_INFO,
    GET_DISLIKE_INFO,
    UP_LIKE,
    DOWN_LIKE,
    UP_DISLIKE,
    DOWN_DISLIKE
    
}
from '../_actions/types'


export default function(state={likes:[],disLikes:[]},action){
    switch(action.type){
        case GET_LIKE_INFO :
            return{
                ...state, 
                likes:[...state.likes,...action.payload.likes]
            }
        case GET_DISLIKE_INFO:
            return{
                ...state, 
                disLikes:[...state.disLikes,...action.payload.disLikes]
            }
        case UP_LIKE:
            return{
                //...state, likeNumber:state.likeNumber+1,liked:'liked',
                ...state,
                
                
            }
        case DOWN_LIKE:{
            return{
               // ...state, likeNumber:state.likeNumber-1, liked:null
              ...state,
            }
        }
        case UP_DISLIKE :{
            return{
               // ...state, disLikeNumber:state.disLikeNumber+1, disLiked:'disLiked',
                ...state
            }
        }
        case DOWN_DISLIKE :{
            return{
               // ...state, disLikeNumber:state.disLikeNumber-1, disLiked:null
                  ...state
            }
        }
        default:
            return state;
    }
}