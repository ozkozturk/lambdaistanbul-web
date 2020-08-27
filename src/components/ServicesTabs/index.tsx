import React, { FC } from 'react';
import { Col } from 'antd';
import Paragraph from '../common/Paragraph';
import { StyledServicesTabs, StyledRow, ServiceImage, ServiceText, ServiceInfo } from './styled';
import { ServicesInfoTypes } from './types';

const ServicesTabs: FC = () => {
  const servicesInfo: ServicesInfoTypes[] = [
    { name: 'Lambda Hizmeti A', description: '', image: 'https://via.placeholder.com/65x65', color: 'rgba(232, 82, 66, 0.89)' },
    { name: 'Lambda Hizmeti B', description: '', image: 'https://via.placeholder.com/65x65', color: 'rgba(243, 112, 43, 0.89)' },
    { name: 'Lambda Hizmeti C', description: '', image: 'https://via.placeholder.com/65x65', color: 'rgba(252, 179, 21, 0.89)' },
    { name: 'Lambda Hizmeti D', description: '', image: 'https://via.placeholder.com/65x65', color: 'rgba(3, 168, 203, 0.89)' },
  ];

  return (
    <StyledServicesTabs>
      <StyledRow>
        {servicesInfo.map((serviceInfo) => (
          <Col sm={12} xl={6} key={serviceInfo.name} style={{ backgroundColor: serviceInfo.color }}>
            <ServiceInfo>
              <ServiceImage>
                <img src={serviceInfo.image} alt={serviceInfo.name} />
              </ServiceImage>
              <ServiceText>
                <a href="/">{serviceInfo.name}</a>
                <Paragraph>{serviceInfo.description || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}</Paragraph>
              </ServiceText>
            </ServiceInfo>
          </Col>
        ))}
      </StyledRow>
    </StyledServicesTabs>
  );
};

export default ServicesTabs;
