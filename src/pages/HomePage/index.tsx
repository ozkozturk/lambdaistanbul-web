import React, { FC } from 'react';
import { HomePageContent } from './styled';
import { HomePageProps } from './types';
import HomePageCarousel from '../../components/HomePageCarousel';
import HomePageAbout from '../../components/HomePageAbout';
import HomePageHelpForm from '../../components/HomePageHelpForm';

const HomePage: FC<HomePageProps> = ({ text }) => {
  return (
    <div>
      <HomePageCarousel text="Community Center" />
      <HomePageContent>
        <HomePageAbout text="" />
        <HomePageHelpForm text="" />
      </HomePageContent>
    </div>
  );
};

export default HomePage;
