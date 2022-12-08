import { Menu as AMenu, MenuProps as AMenuProps } from 'antd';

type MenuProps = AMenuProps & {};

const Menu = (props: MenuProps) => {
  return <AMenu {...props} />;
};

export default Menu;
