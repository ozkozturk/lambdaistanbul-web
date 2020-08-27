import styled from '@emotion/styled';
import { Carousel } from 'antd';
import { AppCarouselItemTypes } from './types';

export const AppCarouselFullPageWrapper = styled.div`
  position: relative;

  .carousel-page {
    text-align: center;
    margin: 80px auto;
    padding: 20px;
    color: white;

    h2 {
      font-size: 80px;
      color: #ffffff;
      .colored-headline {
      display: block;
       color: #fcb315;
      }
    }

    h3 {
      font-size: 28px;
      color: #ffffff;
    }
  }
`;

export const StyledCarousel = styled(Carousel)`
  height: ${(window.innerHeight) * (4 / 5)}px;

  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
  }
`;

export const CarouselItem = styled.div`
  height: 100%;
  background-image: ${({ image }: AppCarouselItemTypes) => `url(${image})`};
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    h2 {
      z-index: 2;
    }

    &:after {
      content: ' ';
      position: absolute;
      background: rgba(0,0,0,0.15);
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  }
`;
