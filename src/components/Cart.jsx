// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, List, Typography } from 'antd';
import { removeFromCart } from '../redux/cartSlice';

const { Title } = Typography;

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>🅲🅰🆁🆃</Title>
      <List
        bordered
        dataSource={cart}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type='danger'
                onClick={() => dispatch(removeFromCart(item))}
              >
                𝐑𝐞𝐦𝐨𝐯𝐞
              </Button>,
            ]}
          >
            {item.name} - ${item.price} x {item.quantity}
          </List.Item>
        )}
      />
      <Title level={4}>𝑻𝒐𝒕𝒂𝒍 ${total.toFixed(2)}</Title>
    </div>
  );
}

export default Cart;
