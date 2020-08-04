import React, { FC } from 'react';
import { HomePageContent } from './styled';
import { HomePageProps } from './types';
import HomePageCarousel from '../../components/homepage/Carousel';
import About from '../../components/homepage/About';
import HelpForm from '../../components/homepage/HelpForm';

const HomePage: FC<HomePageProps> = ({ text }) => {
  return (
    <div>
      <HomePageCarousel text="Community Center" />
      <HomePageContent>
        <About text={text} />
        <HelpForm text={text} />
      </HomePageContent>
    </div>
  );
};

export default HomePage;
