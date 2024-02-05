import React from 'react';
import MenuItem from '../components/MenuItem/MenuItem';
import MenuList from '../components/MenuList/MenuList';
import '../styles/Menu.css'

export const Menu = () => {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <h2>To order please call us +(022) 4369-4810 </h2>
        <div className="menuList">{MenuList.map((menuItem, key)=>{
            return (
            <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            />
            );
        })}</div>
    </div>
  )
}
