import React, { FC } from 'react';
import { Typography } from 'antd';
import { LinkProps } from 'antd/lib/typography/Link.d';
import styled from '@emotion/styled';

const { Link } = Typography;

const AppLink: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      {children}
    </Link>
  );
};

export default styled(AppLink)``;
