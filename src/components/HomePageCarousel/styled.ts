import styled from '@emotion/styled';

export const StyledHomePageCarousel = styled.div`
  position: relative;
  .ant-carousel {

    .slick-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 50px;
      height: 100vh;
      background-image: url("https://source.unsplash.com/1600x900?people");
    }

    .slider {

      .slider-h3 {
        color: #fff;
        font-size: 2em;
      }

      .slider-h2 {
        font-size: 4em;
        font-weight: bolder;
        color: #ffffff;

        .highlight-h2 {
          color: #fcb315;
          display: block;
        }
      }

      .slider-message {
        color: #ffffff;
        font-size: 2em;
      }
    }
  }
`;
export const HomePageServices = styled.div`

  .services {
    width: 100%;
    height: 168px;
    background-color: chocolate;
    opacity: 0.8;
    position: absolute;
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
