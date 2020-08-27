import React, { FC } from 'react';
import { If } from 'react-extras';
import { AppCarouselFullPageWrapper, StyledCarousel, CarouselItem } from './styled';
import { AppCarouselProps } from './types';
import Button from '../common/Button';
import Text from '../common/Text';

const AppCarousel: FC = () => {
  return (
    <div>App Carousel</div>
  );
};

const AppCarouselFullPage: FC<AppCarouselProps> = ({ data }) => {
  return (
    <AppCarouselFullPageWrapper>
      <StyledCarousel
        arrows
        dots={false}
      >
        {data.map((item) => (
          <CarouselItem image={item.image} key={`${item.text}-${item.image}`}>
            <div>
              <h2>{item.text}</h2>
              <If condition={!!item.url}>
                <Button textColor="white" backgroundColor="red" buttonWidth="120px">
                  <Text>Diversify</Text>
                </Button>
              </If>
            </div>
          </CarouselItem>
        ))}
      </StyledCarousel>
    </AppCarouselFullPageWrapper>
  );
};

export { AppCarousel, AppCarouselFullPage };
