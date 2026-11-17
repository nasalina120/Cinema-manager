import React from 'react';
import style from './sidebar.module.sass';
import NavItem from './navItem/NavItem.jsx';

import { MENU_ITEMS } from './menu.config.js';

const Sidebar = props => {
  return (
    <nav className={style.sidebar}>
      {MENU_ITEMS.map((item, index) => {
        return <NavItem key={`${item.label}-${index}`} item={item} />;
      })}
    </nav>
  );
};
export default Sidebar;
