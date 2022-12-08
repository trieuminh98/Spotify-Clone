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
        <Col class='text-3xl font-bold underline'>
          <svg role='img' height='24' widxth='24' viewBox='0 0 24 24'>
            <path d='M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 X C7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z' />xxx
          </svg>
        </Col>
      </Row>
    </>
  );
};

export default Header;
