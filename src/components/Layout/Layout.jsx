import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import './style.scss';
import Routes from '../../Routes/Routes';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Pets</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/pet">Create Pet</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64, overflow: 'initial' }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Buscar</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Routes />
        </div>
      </Content>
      <Footer style={{ textAlign: 'left' }}>Test App</Footer>
    </Layout>
  );
};

export default MainLayout;
