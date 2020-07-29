import styled from '@emotion/styled';

export const StyledHomePageCarousel = styled.div`
  position: relative;
`;
export const HomePageServices = styled.div`

  .services {
    width: 100%;
    height: 168px;
    background-color: chocolate;
    opacity: 0.8;
    bottom: 0;
    z-index: 1;
    display: flex;

    .service {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-right: 1px solid;

      .service-logo {
        width: 40%;
        padding: 10%;

        img {
          border-radius: 50%;
        }
      }

      .service-name {
        color: #ffffff;

        a {
          font-size: 2em;
          color: #ffffff;
        }

        a:hover {
          color: #333333;
        }
      }
    }
  }
`;
