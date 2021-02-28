import {
    UPLOAD_IMAGE,
    DELETE_IMAGE,
    UPLOAD_PRODUCT,
    GET_PRODUCT,
    DELETE_PRODUCT,
    GET_FILTER_PRODUCT,
    GET_SEARCH_PRODUCT,
    GET_FIRST_PRODUCT,
    GET_PRODUCT_DETAIL
}
from '../_actions/types'
let initialState ={
    products:[]
}

export default function(state={products:[],postSize:0,product:[]},action){
    switch(action.type){
        case UPLOAD_IMAGE :
            return{
                ...state, images:[...action.payload]
            }
        case DELETE_IMAGE :
            return{
                ...state, images:[...action.payload]
            }
        case UPLOAD_PRODUCT:
            return{
                ...state 
              
            }
        case GET_FIRST_PRODUCT:
            return{
                ...state,
                products:[...action.payload.products],
                postSize:action.payload.postSize
            }
        case GET_PRODUCT:
            return{
                ...state, products:[...state.products,...action.payload.products]
                ,postSize:action.payload.postSize
            }
        case DELETE_PRODUCT:
            return{
                ...state,
               products:[...action.payload.products]
            }
        case GET_FILTER_PRODUCT:
            return{
                ...state,
                products:[...action.payload.products],
                postSize:action.payload.postSize
            }
        case GET_SEARCH_PRODUCT :
            return{
                ...state,
                products:[...action.payload.products],
                postSize:action.payload.postSize
            }
        case GET_PRODUCT_DETAIL:
            return{
                ...state,
                product:action.payload
            }
        
        default:
            return state;
    }
}