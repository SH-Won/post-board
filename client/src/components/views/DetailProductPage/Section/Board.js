import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Paging from './Paging';
import {getFirstProduct} from '../../../../_actions/product_actions';

function Board(props) {
  //  const productId = props.match.params.productId;
    const dispatch = useDispatch();
    const products =useSelector(state=>state.upload.products,[]);
    const [Skip,setSkip] = useState(0);
    const [Limit,setLimit]=useState(4);
   // const [CurrentPage,setCurrentPage]=(1);
    useEffect(()=>{
        dispatch(getFirstProduct(Skip,Limit));
    },[])

    const handlePage = (page)=>{
        let skip = (page -1) * Limit
        let limit = Limit

        dispatch(getFirstProduct(skip,limit))

        setSkip(skip);


    }
    

    return (
        <div>
            <ul style={{listStyle:'none',}}>
                {products && products.map((product,index)=>(
                 <li key={`${product._id}+${index}`} ><a href={`/product/${product._id}`}>{product.title}</a></li>
                ))}
            </ul>
            <Paging products={products} limit={Limit} skip={Skip} handlePage={handlePage}/>

            
        </div>
    )
}

export default Board
