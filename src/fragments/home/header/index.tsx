import { Typography } from 'antd';
import { TopBarBackBtn, TopBarNextBtn } from 'assets/svg/svg';
import { JSXElement } from 'commons/interfaces/common';
import { Button, Col, Row } from 'components';
import Link from 'next/link';
import styles from './Header.module.scss';

type HeaderProps = {};

const Header = (_props: HeaderProps) => {
  return (
    <>
      <Row className={styles['header']} justify='space-between'>
        <Col pT10 flex='10'>
          {/* TODO: Disabled when doesnt have hack or forward */}
          <Button tooltipText='Go back' className='mr-2' type='link' icon={<TopBarBackBtn />} />
          <Button tooltipText='Go forward' className='ml-2' type='link' icon={<TopBarNextBtn />} />
        </Col>
        <Col flex='auto'>
          <Row className={styles['top-bar-right']} justify='space-between'>
            <Col>
              <Link href={'/'}>Premium</Link>
            </Col>
            <Col>
              <Link href={'/'}>Support</Link>
            </Col>
            <Col>
              <Link href={'/'}>Download</Link>
            </Col>
            <Col pT5>
              <Typography className={styles['stick']}>|</Typography>
            </Col>
            <Col>
              <Link href={'/'}>Sign up</Link>
            </Col>
            <Col>
              <Button isLoginStyle className='rounded-3xl h-12 w-24'>
                <Link className='font-bold' href={'/'}>
                  Log in
                </Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Header;
