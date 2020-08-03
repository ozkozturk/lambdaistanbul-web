import React, { FC } from 'react';
import styled from '@emotion/styled';
import BorderedHeadline from './common/BorderedHeadline';

interface HomePageAboutProps {
  text: string;
}

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

const HomePageAbout: FC<HomePageAboutProps> = () => {
  return (
    <HomePageAboutStyled>
      <div className="home-page-about">
        <div className="home-about-text">
          <BorderedHeadline text="What is Community" borderColor="red" />
          <p className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, eaque!</p>
          <p className="light-grey-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque aut ea eos ex facere maxime, modi nemo nisi quaerat quibusdam recusandae sit, ut vel.
            <a href="/">Read More...</a>
          </p>
        </div>
        <div className="home-about-video">
          <video height="100%" width="100%" controls>
            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
            <track default kind="captions" srcLang="en" />
          </video>
        </div>
      </div>
    </HomePageAboutStyled>
  );
};

export default HomePageAbout;
