import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';


function ProductInfo(props) {
    const [Product,setProduct]=useState({})

    useEffect(()=>{
        setProduct(props.info)

    },[props.detail])

   


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>제목</td>
                        <td>내용</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                  <td>{props.detail.title}</td>
                  <td>{props.detail.description}</td>
                  </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default ProductInfo
