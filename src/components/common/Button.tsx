import React, { FC } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button.d';
import styled from '@emotion/styled';

interface AppButtonProps extends ButtonProps {
  backgroundColor: string;
  textColor: string;
  buttonWidth: string;
}

const ButtonStyled = styled.div`

  Button {
    height: 50px;
    width: ${({ buttonWidth }: AppButtonProps) => `${buttonWidth}`};
    background-color: ${({ backgroundColor }: AppButtonProps) => `${backgroundColor}`};
    color: ${({ textColor }: AppButtonProps) => `${textColor}`};
    border-radius: 10px;
    border: none;
    }

  Button:hover {
    color: #3a3d44;
    outline: none;
    background-color: ${({ backgroundColor }: AppButtonProps) => `${backgroundColor}`};
  }
`;

const AppButton: FC<AppButtonProps> = ({ children, backgroundColor, textColor, buttonWidth, ...rest }) => {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      textColor={textColor}
      buttonWidth={buttonWidth}
    >
      <Button
        {...rest}
      >
        {children}
      </Button>
    </ButtonStyled>
  );
};

export default AppButton;
