import React from 'react'
import {Carousel} from 'antd';

const ImageSlider = ({images,SelectedImage,selectImage}) => {
    //`http://192.168.0.92:5000/${image}`
    const renderImagePlay = images && 
    <Carousel autoplay>
                {images && images.map((image,index)=>(
                    <div key={index}>
                        <img style={{width:'100%',height:'350px'}}
                           src={image} alt="product Image"/>
                    </div>
                ))}
            </Carousel>

    return (
        <div>
            
            <div>
                <div>
                    {SelectedImage && 
                    <div className="selected_img">
                    <img src={`${SelectedImage}`} />
                    </div>
                    }
                    <div className="select_img">
                    {images && images.map((image,index)=>(
                        <div className='img_container' key={index} >
                        <img className={SelectedImage === image ? 'choosed_img':'choose_img'}  onClick={()=>selectImage(image)} src={`${image}`} />
                        </div>
                    ))}
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default ImageSlider
