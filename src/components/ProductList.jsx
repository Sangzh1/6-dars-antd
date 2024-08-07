// src/components/ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Typography, Col, Row } from 'antd';
import { addToCart } from '../redux/cartSlice';

const { Title } = Typography;
const { Meta } = Card;

function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>𝗙𝗿𝘂𝗶𝘁-𝗦𝗵𝗼𝗽</Title>
      <Row gutter={16}>
        {products.map((product) => (
          <Col span={8} key={product.id} style={{ marginBottom: '16px' }}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.imageUrl} />}
              actions={[
                <Button
                  type='primary'
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>,
              ]}
            >
              <Meta title={product.name} description={`$${product.price}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductList;
