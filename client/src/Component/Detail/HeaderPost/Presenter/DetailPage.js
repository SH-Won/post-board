import React from "react";
import { Row, Col, Typography } from "antd";
import ImageSlider from "./ImageSlider";
import Information from "./Information";

const { Title } = Typography;
const DetailPage = ({ product,writer,deleteProduct,SelectedImage,selectImage }) => {

  const antd_render =
  <div style={{ width: "85%", margin: "2rem auto" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Title level={2}></Title>
      </div>
      <br />
      <br />
      <Row gutter={[20, 20]}>
        <Col lg={12} xs={24}>
          <ImageSlider images={product.images} SelectedImage={SelectedImage} selectImage={selectImage} />
        </Col>
        <Col lg={12} xs={24}>
          <Information product={product} writer={writer} deleteProduct={deleteProduct}/>
        </Col>
      </Row>
      <Row gutter={[16,16]}>
        <Col lg={24}>
          
        </Col>
      </Row>
      <br />
      <br />
    </div>
  return (
        <div className="detail_container">
          <h2>{product.title}</h2>
          <div className="detail_content">
          <ImageSlider images={product.images} SelectedImage={SelectedImage} selectImage={selectImage}/>
          <Information product={product} writer={writer} deleteProduct={deleteProduct}/>
          </div>
        </div>
    
  );
};

export default DetailPage;
