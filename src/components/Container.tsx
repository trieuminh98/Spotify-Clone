import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import { JSXElement } from "commons/interfaces/common"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from "react";
import { Header } from "fragments";

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

type ContainerProps = {
  children?: JSXElement;
  showHeader?: boolean;
  showSider?: boolean;
  showFooter?: boolean;
}

const Container = (props: ContainerProps) => {
  const { children = null, showHeader = true, showFooter = true, showSider = true } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <>
    <Layout>
      <Layout.Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header className="header">
          <Header></Header>
        </Layout.Header>
        <Layout.Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Layout.Content>

      </Layout>
    </Layout>
  </>
}


export default Container