import React from 'react'
import {Carousel} from 'antd';


const ImageSlider = ({images})=> {
    return (
        <div className='img_container' style={{width:'100%',margin:'0'}}>
            <Carousel autoplay>
                {images && images.map((image,index)=>(
                    <div key={index} style={{}}>
                        <img className='img'
                           src={`http://192.168.0.92:5000/${image}`} alt="product Image"/>
                    </div>
                ))}
            </Carousel>
            
        </div>
        
    )
}

export default ImageSlider
