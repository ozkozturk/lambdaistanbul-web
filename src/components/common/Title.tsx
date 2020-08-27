import React, { FC } from 'react';
import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title.d';
import styled from '@emotion/styled';

const { Title } = Typography;

const AppTitle: FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <Title {...rest}>
      {children}
    </Title>
  );
};

export default styled(AppTitle)`
  font-weight: 400 !important;
`;
