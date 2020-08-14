import React, { FC } from 'react';
import { For } from 'react-extras';
import { HomePageContent } from './styled';
import { HomePageProps } from './types';
import HomePageCarousel from '../../components/homepage/Carousel';
import About from '../../components/homepage/About';
import HelpForm from '../../components/homepage/HelpForm';
import ArticleSummary from '../../components/homepage/ArticleSummary';

const HomePage: FC<HomePageProps> = ({ text }) => {
  const articleSummaryData = [
    {
      title: 'Tekno Bilgi',
      image: 'http://source.unsplash.com/500x300?tech',
      date: '28 Mayıs 2020',
      category: 'Yaşam',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit gravida rutrum. Sit amet massa vitae tortor condimentum lacinia quis vel eros.',
    },
    {
      title: 'Gerçek Bilgi',
      image: 'http://source.unsplash.com/500x300?reality',
      date: '30 Haziran 2020',
      category: 'Destek',
      summary: 'vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum',
    },
    {
      title: 'Olağanüstü Durum',
      image: 'http://source.unsplash.com/500x300?extraordinary',
      date: '02 Temmuz 2020',
      category: 'Hukuk',
      summary: 'vulputate odio ut enim blandit',
    },
  ];

  return (
    <div>
      <HomePageCarousel text="Community Center" />
      <HomePageContent>
        <About text={text} />
        <HelpForm text={text} />
        <For
          of={articleSummaryData}
          render={(articleSummary, index) => (
            <ArticleSummary key={articleSummary.title} index={index} articleSummary={articleSummary} />
          )}
        />
      </HomePageContent>
    </div>
  );
};

export default HomePage;
