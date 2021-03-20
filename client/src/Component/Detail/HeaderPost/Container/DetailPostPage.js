import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import DetailPage from '../Presenter/DetailPage'
import { getProductDetail,removeProduct} from '../../../../_actions/product_actions';
import '../Presenter/HeaderPost.css'


const DetailPostPage = ({history,productId}) => {

    const dispatch = useDispatch();
    
    
    const user = useSelector((state) => state.user.userData, []);
    const writer = { ...user };

    useEffect(()=>{
        dispatch(getProductDetail(productId));
    },[])

    const product = useSelector((state) => state.upload.product, []);
    const productClone = Object.assign([],product.images);
    console.log(productClone)
    const productImage = [...productClone];
    const [SelectedImage,setSelectedImage] =useState();

    useEffect(()=>{
       productImage &&
       setSelectedImage(productImage[0])

    },[product.images])
    //console.log(typeof product.images)
    const deleteProduct = ()=>{
        let variable={
            productId:productId,
            userTo:writer._id
            
        }
        dispatch(removeProduct(variable))
        
        history.push('/')
        

    }
    const selectImage = (image)=>{
        
        //let s_image = document.querySelector('#main_image');
        //s_image.setAttribute('src',`http://192.168.0.92:5000/${image}`)

        setSelectedImage(image)
    }

    return (
        <div>
            <DetailPage product={product} writer={writer._id} deleteProduct={deleteProduct}
             SelectedImage={SelectedImage} selectImage={selectImage}
            />
        </div>
    )
}

export default DetailPostPage
