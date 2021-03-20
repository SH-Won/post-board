import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import LikeDislike from '../../LikeDislike/Presenter/LikeDislike';
import  
{
  addProductLike,
  subProductLike,
  addProductDisLike,
  subProductDisLike
 } from '../../../../_actions/product_actions'



const LikeDisLikePage = ({productId,writer}) => {

    const dispatch = useDispatch();
    const [LikeNumber,setLikeNumber]=useState(0);
    const [DisLikeNumber,setDisLikeNumber]=useState(0);
    const [Liked,setLiked]=useState(false)
    const [DisLiked,setDisLiked]=useState(false);
    const product = useSelector(state=>state.upload.product,[])
    const images = product.images

   
    
    

    useEffect(()=>{

        let like =0;
        let dislike=0;
        for(let num in product.likeUser){ 
               like++;

              
               if(product.likeUser[num]===writer){
                
                setLiked(true)
            }
            
        }
        setLikeNumber(like);
        for(let num2 in product.disLikeUser){
            dislike++;
            if(product.disLikeUser[num2]===writer){
                
                setDisLiked(true)
            }
            
        }
        setDisLikeNumber(dislike)

        console.log('좋아요 렌더링')
       
       /* writer && 
        product.likeUser.map(user=>{
            if(user===writer){
                setLiked(true)
            }
        })
        
        writer &&
        product.disLikeUser.map(user=>{
            if(user===writer){
                setDisLiked(true)
            }
        })
        */
    

    },[product,writer])

    console.log(LikeNumber)

    const onLike =()=>{
        let variable={
            productId:productId,
            user:writer,
            
        }
        if(Liked === false){
            dispatch(addProductLike(variable))
            setLikeNumber(LikeNumber+1)
            setLiked(true)
            if(DisLiked ===true){
                setDisLikeNumber(DisLikeNumber-1)
                setDisLiked(false)
            }
            
        }
        else{
            dispatch(subProductLike(variable))
            setLikeNumber(LikeNumber-1)
            setLiked(false)
        }
     
    }
    const onDisLike = (commentId)=>{
        let variable ={
            productId:productId,
            user:writer
            
        }
        if(DisLiked === false){
            dispatch(addProductDisLike(variable))
            setDisLikeNumber(DisLikeNumber+1)
            setDisLiked(true)
            if(Liked ===true){
                setLikeNumber(LikeNumber-1)
                setLiked(false)
            }
        }
        else{
            dispatch(subProductDisLike(variable))
            setDisLikeNumber(DisLikeNumber-1)
            setDisLiked(false)
        }
    }


    return (
        <LikeDislike 
       
       LikeNumber={LikeNumber}
       DisLikeNumber={DisLikeNumber}
       Liked={Liked}
       DisLiked={DisLiked}
       onLike={onLike}
       onDisLike={onDisLike}
       />
    )
}

export default LikeDisLikePage
