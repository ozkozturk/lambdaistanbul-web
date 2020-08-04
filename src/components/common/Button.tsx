import React, { FC } from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';

interface CustomButtonProps {
  bgColor: string;
  textColor: string;
  buttonWidth: string;
}

interface AppButtonProps extends CustomButtonProps{
  text: string;
}

const ButtonStyled = styled.div`

  Button {
    height: 50px;
    width: ${({ buttonWidth }: CustomButtonProps) => `${buttonWidth}`};
    background-color: ${({ bgColor }: CustomButtonProps) => `${bgColor}`};
    color: ${({ textColor }: CustomButtonProps) => `${textColor}`};
    border-radius: 10px;
    border: none;
    }

  Button:hover {
    color: #3a3d44;
    outline: none;
    background-color: ${({ bgColor }: CustomButtonProps) => `${bgColor}`};
  }
`;

const AppButton: FC<AppButtonProps> = ({ text, bgColor, textColor, buttonWidth, ...rest }) => {
  return (
    <ButtonStyled
      bgColor={bgColor}
      textColor={textColor}
      buttonWidth={buttonWidth}
    >
      <Button
        {...rest}
      >
        {text}
      </Button>
    </ButtonStyled>
  );
};

export default AppButton;
