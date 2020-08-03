import React, { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';

const { Title } = Typography;

interface BorderedHeadlineStyledProps {
  borderColor: string;
}

interface AppBorderedTitleProps extends BorderedHeadlineStyledProps {
  text: string;
}

const BorderedHeadlineStyled = styled.div`
  padding: 15px 0 15px 30px;
  font-size: 40px;
  border-left: ${({ borderColor }: BorderedHeadlineStyledProps) => `1px solid ${borderColor}` };
`;

const BorderedHeadline: FC<AppBorderedTitleProps> = ({ text, borderColor, ...rest }) => {
  return (
    <BorderedHeadlineStyled borderColor={borderColor}>
      <Title {...rest}>
        {text}
      </Title>
    </BorderedHeadlineStyled>
  );
};

export default BorderedHeadline;
