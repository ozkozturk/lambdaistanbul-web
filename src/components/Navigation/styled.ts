import styled from '@emotion/styled';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #3a3d44;
  color: #e0e0e1;

  ul {
    display: flex;
    justify-content: space-evenly;

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
export const StyledNavigationBottom = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;
  color: #3A3D44;

  .logo {
    width: 20%;
    display: flex;
    align-items: center;

    a {
      color: #3A3D44;
      display: flex;
      flex-wrap: nowrap;

      span {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 34px;

        small {
          margin-top: -10px;
          margin-left: 2px;
          font-size: 9px;
          color: #03a8cb;
        }
      }
    }
  }

  ul {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;

    li {
      list-style-type: none;

      a {
        color: #b2b2b2;
        padding: 5px;
        margin: 0 20px;
        line-height: 30px;
      }

      a:hover {
      color: #E85242;
      }
    }
  }

  .donation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    margin-left: 30px;
    padding: 14px 10px;
    background-color: #F3702B;
    border-radius: 10px;

    a {
      width: 121px;
      text-align: center;
      color: #FFFFFF;
    }

    a:hover {
      color: #3A3D44;
    }
  }
`;
