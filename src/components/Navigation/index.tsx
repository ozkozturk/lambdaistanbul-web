import React, { FC } from 'react';
import { StyledNavigation, StyledNavigationBottom } from './styled';
import { NavigationProps } from './types';

const Navigation: FC<NavigationProps> = ({ text, textBottom }) => {
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
            <li>Mon-Fri: 9:00-19:00; Sat: 10:00-17:00; Sun: Closed</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>73 Harvey Forest Suite, New York</li>
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
          <div className="donation">
            <a href="/">DONATE US NOW!</a>
          </div>
        </div>
      </StyledNavigationBottom>
    </div>
  );
};

export default Navigation;
