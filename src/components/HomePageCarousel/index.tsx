import React, { FC } from 'react';
import { Carousel } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { HomePageServices, StyledHomePageCarousel } from './styled';
import { HomePageCarouselProps } from './types';
import AppButton from '../common/Button';

const HomePageCarousel: FC<HomePageCarouselProps> = ({ text }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel
        arrows
        dots={false}
        prevArrow={<CaretLeftFilled />}
        nextArrow={<CaretRightFilled />}
      >
        <div>
          <h3>{text}</h3>
          <h2>
            <span>
              Lorem ipsum dolor
            </span>
            Lorem ipsum dolor sit
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis incidunt nihil quidem!</p>
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
    </div>
  );
};

export default HomePageCarousel;