import styled from '@emotion/styled';
import { Menu } from 'antd';

export const NavigationTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #3a3d44;
  color: #e0e0e1;

  ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;

    li {
      list-style-type: none;
      margin: 10px;

      a {
        color: #b2b2b2;
        padding: 5px;
      }
    }
  }

`;

export const StyledNavigationMobile = styled.div``;

export const NavigationBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.div``;

export const StyledMenu = styled(Menu)`
  border: none;
  background: none;

  li {
    color: #3a3d44;
    font-weight: 500;
    font-size: 1.1em;

    &.ant-menu-item {
      line-height: 100px;
      border: none !important;
      margin-top: 0 !important;
      top: 0 !important;
    }

    &:hover {
      color: #e85242 !important;
    }
  }
`;
