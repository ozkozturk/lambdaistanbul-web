import styled from '@emotion/styled';

const HomePageAboutStyled = styled.div`

  .home-page-about {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .home-about-text {
    width: 50%;
    padding: 0 30px;
    background-color: aqua;

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

export default HomePageAboutStyled;
