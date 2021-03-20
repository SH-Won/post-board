import React,{useState,useEffect} from 'react'
import Dropzone from 'react-dropzone';
import {Icon} from 'antd'
const UploadImage = ({onDrop,Files,FileURL,deletePreview})=> {
    
  //  console.log(FileURL)
    return (
        <div className="input_container">
             <Dropzone
               onDrop={onDrop}
               multiple={true}
               maxSize={8000000000}

               >
                 {({getRootProps,getInputProps})=>(
                     <div className="input_item" 
                     {...getRootProps()}>
                         <input {...getInputProps()}/>
                         <Icon type="plus" style={{fontSize:'3rem'}} />
                     </div>
                 )}  
               </Dropzone>
               <div className="inputed_item" >
                  
                  {FileURL && FileURL.map((image,index)=>(
                      <div key={index} onClick={()=>deletePreview(image)}>
                      <img src={image} className="inputed_item_image"/>
                      </div>
                  ))}
                 
                  
               </div>
            
        </div>
        
    )
}
/*
{images && images.map((image,index)=>(
    <div key={index} >
    <img src={`http://localhost:5000/${image}`} style={{maxWidth:'300px' ,height:'200px', overflowX:'scroll'}}/>
    </div>
))}
*/

export default UploadImage
