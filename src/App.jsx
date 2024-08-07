// src/App.js
import React from 'react';
import { Layout, Menu } from 'antd';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>Products</Menu.Item>
          <Menu.Item key='2'>Cart</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            style={{ height: '100%' }}
          >
            <Menu.Item key='1'>Products</Menu.Item>
            <Menu.Item key='2'>Cart</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px', minHeight: 280 }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <ProductList />
            <Cart />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
