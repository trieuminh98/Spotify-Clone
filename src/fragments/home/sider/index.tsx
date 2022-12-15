import { MenuProps } from 'antd';
import { CreateLogo, HomeLogo, HomeLogoSelected, LibraryLogo, LikedLogo, SearchLogo, SpotifyLogo } from 'assets/svg/svg';
import { Col } from 'components';
import Menu from 'components/Menu';
import Row from 'components/Row';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Sider.module.scss';

type SiderProps = {};

const Sider = (_props: SiderProps) => {
  const [current, setCurrent] = useState('1');

  const menuData = [
    {
      icon: current !== '1' ? <HomeLogo /> : <HomeLogoSelected />,
      label: 'Home',
    },
    {
      icon: <SearchLogo state={current} />,
      label: 'Search',
    },
    {
      icon: <LibraryLogo />,
      label: 'Your Library',
    },
    {
      icon: (
        <div className={styles['create-logo']}>
          <CreateLogo />
        </div>
      ),
      label: 'Create Playlist',
    },
    {
      icon: (
        <div className={styles['liked-logo']}>
          <LikedLogo />
        </div>
      ),
      label: 'Liked Songs',
    },
  ];

  const items2: MenuProps['items'] = menuData.map((menu, index: number) => {
    const key = String(index + 1);

    return {
      key,
      icon: menu.icon,
      label: menu.label,
    };
  });

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Row className='bg-black'>
      <Col mT24 span={24}>
        <Row pL20 className={styles['logo']}>
          <SpotifyLogo />
        </Row>
      </Col>
      <Col className='w-full pt-5' style={{ height: '85vh' }}>
        <Row>
          <Col span={24}>
            <Menu
              onClick={onClick}
              className={`bg-black ${styles['menu']}`}
              mode='inline'
              selectedKeys={[current]}
              defaultOpenKeys={['sub1']}
              items={items2}
            />
          </Col>
          <Row mL20 class={styles['sider-footer']}>
            <Col pT10 span={24}>
              <Link onClick={() => window.open('https://www.spotify.com/vn-vi/legal/cookies-policy/', '_blank')} href={''}>
                Cookies
              </Link>
            </Col>
            <Col pT10 span={24}>
              <Link onClick={() => window.open('https://www.spotify.com/vn-vi/legal/privacy-policy/', '_blank')} href={''}>
                Privacy
              </Link>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default Sider;
