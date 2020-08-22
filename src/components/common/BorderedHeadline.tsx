import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';

const { Title } = Typography;

interface BorderedHeadlineStyledProps {
  borderColor: string;
  textColor: string;
}

interface AppBorderedTitleProps extends BorderedHeadlineStyledProps {
  text: string;
}

const BorderedHeadlineStyled = styled.div`

  h2 {
    font-size: 40px;
    margin-top: 20px;
    padding: 10px 0 10px 30px;
    border-left: ${({ borderColor }: BorderedHeadlineStyledProps) => `2px solid ${borderColor}`};
    color: ${({ textColor }: BorderedHeadlineStyledProps) => `${textColor}`};
  }
`;

const BorderedHeadline: FC<AppBorderedTitleProps> = ({ text, textColor, borderColor, ...rest }) => {
  return (
    <BorderedHeadlineStyled
      borderColor={borderColor}
      textColor={textColor}
    >
      <Title
        level={2}
        {...rest}
      >
        {text}
      </Title>
    </BorderedHeadlineStyled>
  );
};

export default BorderedHeadline;
