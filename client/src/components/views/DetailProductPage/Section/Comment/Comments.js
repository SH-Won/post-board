import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Form,Button,Input} from 'antd';
import {saveComment,getComments} from '../../../../../_actions/comment_actions'
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';


const {TextArea} = Input;

function Comments(props) {
    const dispatch =useDispatch();
    const writer= localStorage.getItem('userId');
    const productId = props.productId
    //const comments = useSelector(state=>state.comment.comments,[])
    const [Comment,setComment]=useState('')

    useEffect(()=>{
        

    },[])


    const onChangeComment = (e)=>{
        setComment(e.target.value);
    }
    const onSubmit =(e)=>{
        e.preventDefault();

        let variable={
            writer:writer,
            productId:productId,
            content:Comment
        }
        dispatch(saveComment(variable))
        setComment('');
    }


    return (
        <div style={{backgroundColor:'#d444444'}}>
            <h2>댓글</h2>
            {props.commentList && props.commentList.map((comment,index)=>(
                !comment.responseTo &&
                <React.Fragment key={`${comment._id}+${index}`}>
                <SingleComment comment={comment} writer={writer} productId={productId}/>
                <ReplyComment commentList={props.commentList} writer={writer} productId={productId} parentCommentId={comment._id}/>
                </React.Fragment>
               
            ))}
            <br/>
            <div style={{border:'1px solid black', borderRadius:'8px',width:'100%'}}>
            <Form onSubmit={onSubmit}>
                <TextArea
                   value={Comment}
                   onChange={onChangeComment}
                   />
                <br/>
                <Button onClick={onSubmit}>
                    댓글 달기
                </Button>

            </Form>
            </div>
            
        </div>
    )
}

export default Comments
