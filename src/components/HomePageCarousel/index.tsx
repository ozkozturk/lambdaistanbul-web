import React, { FC } from 'react';
import { Carousel } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { HomePageServices, StyledHomePageCarousel } from './styled';
import { HomePageCarouselProps } from './types';
import AppButton from '../common/Button';

const HomePageCarousel: FC<HomePageCarouselProps> = ({ text }) => {
  return (
    <StyledHomePageCarousel>
      <Carousel
        arrows
        dots={false}
        prevArrow={<CaretLeftFilled />}
        nextArrow={<CaretRightFilled />}
      >
        <div className="carousel-page">
          <h3>{text}</h3>
          <h2>
            <span className="colored-headline">Lorem ipsum dolor</span>
            Lorem ipsum dolor sit
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis incidunt nihil quidem!</p>
          <AppButton text="Join" textColor="white" bgColor="red" buttonWidth="120px">{text}</AppButton>
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
  );
};

export default HomePageCarousel;
