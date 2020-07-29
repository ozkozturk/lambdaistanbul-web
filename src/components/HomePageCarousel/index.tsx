import React, { FC } from 'react';
import { Carousel } from 'antd';
import { HomePageServices, StyledHomePageCarousel } from './styled';
import { HomePageCarouselProps } from './types';
import AppButton from '../common/Button';

const HomePageCarousel: FC<HomePageCarouselProps> = ({ text }) => {
  return (
    <div>
      <StyledHomePageCarousel>
        <Carousel dotPosition="top">
          <div className="slider">
            <h3 className="slider-h3">{text}</h3>
            <h2 className="slider-h2">
              <span className="highlight-h2">
                Lorem ipsum dolor
              </span>
              Lorem ipsum dolor sit
            </h2>
            <p className="slider-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis incidunt nihil quidem!</p>
            <AppButton text="Join">{text}</AppButton>
          </div>
          <div>
            <h3>{text}</h3>
          </div>
          <div>
            <h3>{text}</h3>
          </div>
          <div>
            <h3>{text}</h3>
          </div>
        </Carousel>
        <HomePageServices>
          <div className="services">
            <div className="service">
              <div className="service-logo">
                <img src="https://via.placeholder.com/65x65" alt="" />
              </div>
              <div className="service-name">
                <h4>
                  <a href="/">Service - 1</a>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="service">
              <div className="service-logo">
                <img src="https://via.placeholder.com/65x65" alt="" />
              </div>
              <div className="service-name">
                <h4>
                  <a href="/">Service - 2</a>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="service">
              <div className="service-logo">
                <img src="https://via.placeholder.com/65x65" alt="" />
              </div>
              <div className="service-name">
                <h4>
                  <a href="/">Service - 3</a>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="service">
              <div className="service-logo">
                <img src="https://via.placeholder.com/65x65" alt="" />
              </div>
              <div className="service-name">
                <h4>
                  <a href="/">Service - 4</a>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </HomePageServices>
      </StyledHomePageCarousel>
    </div>
  );
};

export default HomePageCarousel;
