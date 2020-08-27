import React, { FC } from 'react';
import { Typography } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph.d';
import styled from '@emotion/styled';

const { Paragraph } = Typography;

const AppParagraph: FC<ParagraphProps> = ({ children, ...rest }) => {
  return (
    <Paragraph {...rest}>
      {children}
    </Paragraph>
  );
};

export default styled(AppParagraph)``;
