import React,{useState,useEffect} from 'react'
import ProductInfo from './Section/ProductInfo'
import ProductImage from './Section/ProductImage';
import {Row,Col} from 'antd';
import {useSelector,useDispatch} from 'react-redux';
import {getProductDetail} from '../../../_actions/product_actions';
import {getComments} from '../../../_actions/comment_actions';
import LikeDisLike from './Section/LikeDisLike';
import Comments from './Section/Comment/Comments';
import Board from './Section/Board';

function DetailProductPage(props) {

    const productId = props.match.params.productId
    const product = useSelector(state=>state.upload.product,[state=>state.upload.product]);
    const comments = useSelector(state=>state.comment.comments,[state=>state.comment.comments])
    const userTo = localStorage.getItem('userId');
    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(getProductDetail(productId));

        let variable={
            productId:productId
        }
        dispatch(getComments(variable))
        

    },[])
    console.log(productId)
    console.log(product)

    
    return (

        <div style={{width:'85%',margin:'1rem auto'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
                <h2>{product.title}</h2>
            </div>
            <br/><br/>
            <div style={{ maxHeight:'400px'}}>
                <Board />
           <Row gutter={[16,16]}>
               <Col lg={12} xs={24}>
                  <ProductImage detail={product}/>
               </Col>
               <Col lg={12} xs={24}>
                  <ProductInfo detail={product} />
               </Col>
           </Row>
           </div>
           <Row gutter={[16,16]}>
           <Col xs={24} >
               <div style={{alignItems:'center'}}>
               <LikeDisLike product productId={productId} userTo={userTo}/> 
               <Comments  commentList={comments} productId={productId}/>
               </div>
               </Col>

           </Row>
           <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
          
          </div>
          


            
        </div>
    )
}

export default DetailProductPage
