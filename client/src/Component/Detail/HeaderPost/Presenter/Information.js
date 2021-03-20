import React from 'react'
import { Descriptions,Button} from 'antd'

const Information = ({product,writer,deleteProduct}) => {
     const productWriter={...product.writer}
  //  console.log(`writer:${writer}  product.writer : ${productWriter._id}`)

    return (
        <div style={{margin:'1rem auto'}}>
        <Descriptions bordered>
            <Descriptions.Item label="제목">{product.title}</Descriptions.Item>
            <Descriptions.Item label="내용">{product.description}</Descriptions.Item>
            <Descriptions.Item label="작성자">{productWriter.name}</Descriptions.Item>
        
        </Descriptions>
        <br/>
        {productWriter._id == writer && 
        <div>
        <Button><a href={`/product/edit/${product._id}`}>수정</a></Button>
        <Button onClick={deleteProduct}>삭제</Button>
        </div>
        }     
        </div>
    )
}

export default Information
