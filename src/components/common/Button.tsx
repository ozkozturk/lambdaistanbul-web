import React, { FC } from 'react';
import { Button } from 'antd';

interface AppButtonProps {
  text: string;
}

const AppButton: FC<AppButtonProps> = ({ text, ...rest }) => {
  return (
    <Button {...rest}>{text}</Button>
  );
};

export default AppButton;
