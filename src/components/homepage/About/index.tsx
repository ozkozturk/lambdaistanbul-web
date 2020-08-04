import React, { FC } from 'react';
import HomePageAboutStyled from './styled';
import { HomePageAboutProps } from './types';
import BorderedHeadline from '../../common/BorderedHeadline';

const About: FC<HomePageAboutProps> = () => {
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

export default About;
