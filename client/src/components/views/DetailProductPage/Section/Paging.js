import React,{useState,useEffect} from 'react'

import axios from 'axios';

function Paging(props) {
    const [Pages,setPages]=useState([])
    const [PageCount,setPageCount]=useState(0);

    useEffect(()=>{
        let variable={
            skip:0   
        }
        axios.post('/api/product/getFirstProducts',variable)
        .then(response =>{
        const product_length = response.data.products.length;
        const pageNumber = Math.ceil(product_length/props.limit);
        const pageArray = Array.from({length:pageNumber},(v,i)=>i+1)
        
        setPages(pageArray);
        

        })
        

    },[])
    return (
        <div>
            <ul style={{listStyle:'none',display:'flex'}}>
             {Pages && Pages.map((page,index)=>(
               <li style={{padding:'4px'}} key={index} onClick={()=>props.handlePage(page)}>{page}</li>
             ))}
            </ul>
            
        </div>
    )
}

export default Paging
