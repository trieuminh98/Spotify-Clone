import { Layout, theme } from 'antd';
import { JSXElement } from 'commons/interfaces/common';
import { Menu } from 'components';
import { Header, Sider } from 'fragments';

type ContainerProps = {
  children?: JSXElement;
  showHeader?: boolean;
  showSider?: boolean;
  showFooter?: boolean;
};

const Container = (props: ContainerProps) => {
  const { children = null, showHeader = true, showFooter = true, showSider = true } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Layout.Sider width={'15%'} style={{ background: colorBgContainer }}>
          <Sider />
        </Layout.Sider>
        <Layout>
          <Layout.Header className='header'>
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
  );
};

export default Container;
