import React, { FC } from 'react';
import { Row, Col } from 'antd';
import HeadlineWithBorder from '../common/HeadlineWithBorder';
import Paragraph from '../common/Paragraph';
import Link from '../common/Link';
import { StyledAboutSummary } from './styled';
import { AboutSummaryProps } from './types';

const AboutSummary: FC<AboutSummaryProps> = () => {
  return (
    <StyledAboutSummary>
      <Row>
        <Col span={11}>
          <HeadlineWithBorder
            text="What is Community"
            borderColor="#03a8cb"
            textColor="black"
          />
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, eaque!</Paragraph>
          <Paragraph>
            Deserunt et id et incididunt anim laboris dolore ea ea sit deserunt nisi nulla pariatur. Nulla magna aliquip consequat reprehenderit nostrud quis. Tempor ullamco id consequat consectetur magna id voluptate aliquip esse cillum. Tempor Lorem adipisicing veniam aliqua incididunt tempor et qui fugiat qui excepteur.
            <Link href="/">Read More...</Link>
          </Paragraph>
        </Col>
        <Col span={12} offset={1}>
          <figure>
            <video height="100%" width="100%" controls>
              <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" />
              <track default kind="captions" srcLang="en" />
            </video>
          </figure>
        </Col>
      </Row>
    </StyledAboutSummary>
  );
};

export default AboutSummary;
