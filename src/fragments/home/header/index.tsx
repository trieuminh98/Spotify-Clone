import { MenuProps } from 'antd';
import { JSXElement } from 'commons/interfaces/common';
import Col from 'components/Col';
import Row from 'components/Row';

type HeaderProps = {
  children?: JSXElement;
  showHeader?: boolean;
  showSider?: boolean;
  showFooter?: boolean;
};

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Header = (props: HeaderProps) => {
  return (
    <>
      <Row justify='space-between'>
        <Col className='text-3xl font-bold underline'></Col>
      </Row>
    </>
  );
};

export default Header;
