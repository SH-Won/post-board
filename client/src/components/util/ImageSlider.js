import React from 'react'
import {Carousel} from 'antd';

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((image,index)=>(
                    <div key={index}>
                        <img style={{width:'100%',height:'200px'}}
                           src={`http://localhost:5000/${image}`} alt="product Image"/>
                    </div>
                ))}
            </Carousel>
            
        </div>
    )
}

export default ImageSlider
