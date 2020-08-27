import React, { FC } from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/pro-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from '../common/Button';
import Text from '../common/Text';
import { NavigationTop, NavigationBottom, Logo, StyledMenu } from './styled';
import { NavigationProps } from './types';

const Navigation: FC<NavigationProps> = () => {
  return (
    <>
      <NavigationTop>
        <ul>
          <li>
            <a href="/">
              <Icon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="/">
              <Icon icon={faYoutube} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Icon icon={faEnvelope} />
            <span>bilgi@lambdaistanbul.org</span>
          </li>
          <li>
            <Icon icon={faPhone} />
            <span>05555 555 55 55</span>
          </li>
        </ul>
      </NavigationTop>
      <NavigationBottom>
        <Logo>
          <a href="/">
            <img src="https://via.placeholder.com/200x100.png?text=logo" alt="logo" />
          </a>
        </Logo>
        <StyledMenu mode="horizontal">
          <Menu.Item>ANASAYFA</Menu.Item>
          <Menu.Item>DUYURU</Menu.Item>
          <Menu.Item>DERNEK</Menu.Item>
          <Menu.Item>BAĞLANTILAR</Menu.Item>
          <Menu.Item>İLETİŞİM</Menu.Item>
        </StyledMenu>
        <div>
          <Button backgroundColor="#F3702B" textColor="white" buttonWidth="180px">
            <Text>BAĞIŞTA BULUNUN!</Text>
          </Button>
        </div>
      </NavigationBottom>
    </>
  );
};

export default Navigation;
