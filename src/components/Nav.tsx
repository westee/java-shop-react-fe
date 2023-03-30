import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';
import vars from '_vars.scss';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  background: white;
  display:flex;
    > a{
      width: 33.3333%;
      text-align:center;
      display: flex;
      flex-direction: column;
      padding: 8px 0 4px;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;      
        height: 24px;
      }
      &.active{
        color: ${vars.colorMain};
      }
  }
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <NavLink to="/orders" exact activeClassName="active">
        <Icon name="order"/>
        <span>订单</span>
      </NavLink>
      <NavLink to="/cart" exact activeClassName="active">
        <Icon name="cart"/>
        <span>购物车</span>
      </NavLink>
      <NavLink to="/me" exact activeClassName="active">
        <Icon name="user"/>
        <span>个人</span>
      </NavLink>
    </NavWrapper>
  );
};

