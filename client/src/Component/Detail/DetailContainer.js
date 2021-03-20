import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBoardProduct,getFirstProduct,getProductDetail } from "../../_actions/product_actions";
import {
  getComments,
  saveComment,
  DeleteComment,
} from "../../_actions/comment_actions";
//import {recentlyView } from '../../_actions/user_actions';
//import DetailPage from "../../Component/Detail/DetailPage";
//import Comments from "../../Component/Detail/Comments";
//import RecentView from '../../Component/Detail/RecentView';
//import Board from '../../Component/Detail/Board'


import DetailPostPage from './HeaderPost/Container/DetailPostPage';
import BoardPage from './Board/Container/BoardPage';
import RecentViewPage from './RecentView/Container/RecentViewPage'
import CommentPage from './Comment/Container/CommentPage'
import LikeDisLikePage from './ProductLikeDislike/Container/LikeDisLikePage'
const DetailContainer = (props) => {
 // const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const user = useSelector((state) => state.user.userData, []);
  const writer = { ...user };
 // const [ChildCommentNumber, setChildCommentNumber] = useState(0);

  //const [Pages,setPages]=useState([])
  //const [CurrentPage,setCurrentPage]=useState(0);
  //const [Skip,setSkip]=useState(0)
  //const [Limit,setLimit]=useState(5)

  useEffect(() => {
    //dispatch(getProductDetail(productId));

   /* let variable = {
      productId: productId,
    };
    dispatch(getComments(variable));
    */

  /*  let variables = {
      product:productId,
      userTo:writer._id
    }
    dispatch(recentlyView(variables))
   */
    //dispatch(getFirstProduct(0))
    
  }, []);

  //const product = useSelector((state) => state.upload.product, []);
 // const commentList = useSelector((state) => state.comment.comments, []);
 // const userView = useSelector(state=>state.user.views);
 // const recentView = [...userView]
  //const userRecentView = userView.map(view => view.product)
 // const products = useSelector(state=>state.upload.products)

 /* useEffect(()=>{
    let products_length = products.length; // 41 이라면
    let page_length = Math.ceil(products_length/Limit) // 41/4 에서 올림
    let pages = Array.from({length:page_length},(v,i)=> i+1)
    
    //현재 아이템이 들어있는 페이지가 몇번째 페이지인가?
    let currentProductIndex = products.map(product => product._id.toString()).indexOf(productId)
    let pageIndex = Math.ceil((currentProductIndex+1)/Limit)
    setPages(pages)
    setCurrentPage(pageIndex)
    setSkip((pageIndex -1)*Limit )
    
  },[products])*/
  
  //console.log(Pages)
  
  //console.log(Skip)

  /*const onChangePage =(page)=>{
    const skip = (page -1) * Limit
    console.log(skip)

    dispatch(getBoardProduct(skip,Limit))
    setSkip(skip)
    setCurrentPage(page)
    
  }
  useEffect(()=>{
    dispatch(getBoardProduct(Skip,Limit))

  },[CurrentPage])*/

  
  
 // const board_products = useSelector(state=>state.upload.boardProducts)

/*  const getChildCommentNumber = (commentId) => {
    let Number = 0;
    commentList &&
      commentList.map((comment) => {
        if (comment.responseTo == commentId) Number++;
      });
    setChildCommentNumber(Number);
  };

  const onSubmitComment = (CommentValue, commentId) => {
    let variable = {};
    !commentId
      ? (variable = {
          writer: writer._id,
          content: CommentValue,
          productId: productId,
        })
      : (variable = {
          writer: writer._id,
          content: CommentValue,
          productId: productId,
          responseTo: commentId,
        });

    dispatch(saveComment(variable));
  };

  const deleteComment = (commentId) => {
    let variable = {
      productId: productId,
      commentId: commentId,
    };
    dispatch(DeleteComment(variable));
  };
  */
  
//<DetailPage product={product} writer={writer._id}/>
  return (
    <div>
      <DetailPostPage history={props.history} productId={productId}/>
      <LikeDisLikePage productId={productId} writer={writer._id}/>
      <BoardPage productId={productId} />
      <div style={{display:'flex',width:'100%'}}>
      
      
      </div>
      <RecentViewPage productId={productId} writer={writer._id}/>
      <CommentPage
        writer={writer._id}
        productId={productId}
        
      />
    </div>
  )
};

export default DetailContainer;
