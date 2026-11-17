import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navItem.module.sass';
import classNames from 'classnames';

const NavItem = ({ item }) => {
  const { label, Icon, to, end, hasDivider } = item;

  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        classNames(style.navItem, {
          [style.activeNavItem]: isActive,
          [style.divider]: hasDivider,
        })
      }
    >
      {Icon && <Icon className={style.navIcon} />}
      <span className={style.navLabel}>{label}</span>
    </NavLink>
  );
};

export default NavItem;
