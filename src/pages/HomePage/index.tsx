import React, { FC } from 'react';
import { Carousel, Form, Input, Button } from 'antd';
import { StyledHomePageCarousel, HomePageServices, HomePageContent, HomePageAbout, HomePageHelpForm } from './styled';
import { HomePageProps } from './types';
import AppButton from '../../components/common/Button';

const HomePage: FC<HomePageProps> = ({ text }) => {
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
      <HomePageContent>
        <HomePageAbout>
          <div className="home-page-about">
            <div className="home-about-text">
              <h2>What is Community</h2>
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
        </HomePageAbout>
        <HomePageHelpForm>
          <div className="help-form">
            <h2>Do You Need Help?</h2>
            <p>Contact us and we help you to solve any of your problem.</p>
            <Form>
              <Input.Group>
                <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                  <Input placeholder="FULL NAME*" />
                </Form.Item>
                <Form.Item name={['user', 'email']} rules={[{ required: true }, { type: 'email' }]}>
                  <Input placeholder="EMAIL ADDRESS*" />
                </Form.Item>
              </Input.Group>
              <Form.Item name={['user', 'message']}>
                <Input.TextArea placeholder="YOUR MESSAGE" />
              </Form.Item>
              <Form.Item colon={false}>
                <Button>
                  SEND NOW
                </Button>
              </Form.Item>
            </Form>
          </div>
        </HomePageHelpForm>
      </HomePageContent>
    </div>
  );
};

export default HomePage;
