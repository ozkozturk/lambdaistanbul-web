import React, { FC } from 'react';
import { StyledNavigation, StyledNavigationBottom } from './styled';
import { NavigationProps } from './types';
import AppButton from '../common/Button';

const Navigation: FC<NavigationProps> = ({ time, address }) => {
  return (
    <div>
      <StyledNavigation>
        <div>
          <ul>
            <li><a href="/">F</a></li>
            <li><a href="/">T</a></li>
            <li><a href="/">G</a></li>
            <li><a href="/">in</a></li>
            <li><a href="/">Y</a></li>
            <li>{time}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{address}</li>
            <li><a href="/">example@example.com</a></li>
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
          </ul>
        </div>
      </StyledNavigation>
      <StyledNavigationBottom>
        <div>
          <div className="logo">
            <a href="/">
              <img src="https://via.placeholder.com/55x55.png?text=logo" alt="logo" />
              <span className="logo-text">
                Brand
                <small>COMMUNITY CENTER</small>
              </span>
            </a>
          </div>
        </div>
        <div>
          <div className="menu">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/">PAGES</a></li>
              <li><a href="/">SERVICES</a></li>
              <li><a href="/">FEATURES</a></li>
              <li><a href="/">GALLERY</a></li>
              <li><a href="/">BLOG</a></li>
              <li><a href="/">SHOP</a></li>
              <li><a href="/">CONTACTS</a></li>
            </ul>
          </div>
        </div>
        <div>
          <AppButton text="DONATE US NOW!" bgColor="#F3702B" textColor="white" buttonWidth="180px" />
        </div>
      </StyledNavigationBottom>
    </div>
  );
};

export default Navigation;
