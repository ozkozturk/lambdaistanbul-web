import React, { FC } from 'react';
import styled from '@emotion/styled';
import Title from './Title';

interface StyledHeadlineWithBorderProps {
  borderColor: string;
  textColor: string;
}

interface HeadlineWithBorderProps extends StyledHeadlineWithBorderProps {
  text: string;
}

const StyledHeadlineWithBorder = styled.div`
  h2 {
    font-size: 40px;
    margin-top: 20px;
    padding: 10px 0 10px 30px;
    border-left: ${({ borderColor }: StyledHeadlineWithBorderProps) => `2px solid ${borderColor}`};
    color: ${({ textColor }: StyledHeadlineWithBorderProps) => `${textColor}`};
  }
`;

const HeadlineWithBorder: FC<HeadlineWithBorderProps> = ({ text, textColor, borderColor, ...rest }) => {
  return (
    <StyledHeadlineWithBorder
      borderColor={borderColor}
      textColor={textColor}
    >
      <Title
        level={2}
        {...rest}
      >
        {text}
      </Title>
    </StyledHeadlineWithBorder>
  );
};

export default HeadlineWithBorder;
