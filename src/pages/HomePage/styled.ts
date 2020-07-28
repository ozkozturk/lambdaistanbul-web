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

export const HomePageContent = styled.div`
  width: 85%;
  margin: 120px auto;
`;

export const HomePageAbout = styled.div`

  .home-page-about {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .home-about-text {
    width: 50%;
    padding: 0 30px;
    background-color: aqua;

    h2 {
      padding: 15px 0 15px 30px;
      font-size: 40px;
      border-left: 2px solid #03a8cb;
    }

    .dark-grey-text {
      font-size: 20px;
      font-style: italic;
      color: #3a3d44;
    }

    .light-grey-text {
      color: #787878;
      font-size: 16px;

      a {
        color: #e85242;
      }
    }
  }

  .home-about-video {
    width: 50%;
    padding: 0 30px;
    background-color: aqua;
  }
`;

export const HomePageHelpForm = styled.div`
  margin-top: 100px;
  padding: 60px;
  background-image: url("https://source.unsplash.com/1170x570?people");
  display: flex;
  justify-content: flex-end;

  .help-form {
    width: 50%;
    padding: 30px;
    color: #e0e0e1;

    h2 {
      padding: 15px 0 15px 30px;
      font-size: 40px;
      border-left: 2px solid #03a8cb;
      color: #e0e0e1;
    }

    .ant-input-group {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    Input, TextArea {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      font-size: 16px;
      line-height: 30px;
      padding: 15px 30px;
    }

     TextArea {
     height: 140px;
     }

     Button {
      min-width: 170px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fcb315;
      font-size: 16px;
      line-height: 30px;
      color: #e0e0e1;
      border-radius: 10px;
      border: none;
      padding: 25px 30px;
     }

     Button:hover {
      color: #3a3d44;
      outline: none;
     }
  }
`;
