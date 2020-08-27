import React, { FC } from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text.d';
import styled from '@emotion/styled';

const { Text } = Typography;

const AppText: FC<TextProps> = ({ children, ...rest }) => {
  return (
    <Text {...rest}>
      {children}
    </Text>
  );
};

export default styled(AppText)``;
