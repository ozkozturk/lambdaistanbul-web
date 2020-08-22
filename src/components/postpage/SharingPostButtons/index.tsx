import React, { FC } from 'react';
import { SharingPostButtonProps } from './types';
import SharingPostButtonsStyled from './styled';

const SharingPostButtons: FC<SharingPostButtonProps> = () => {
  return (
    <SharingPostButtonsStyled>
      <div className="share-post">
        <a href="/">T</a>
        <a href="/">T</a>
        <a href="/">T</a>
        <a href="/">T</a>
        <a href="/">T</a>
        <a href="/">T</a>
      </div>
    </SharingPostButtonsStyled>
  );
};

export default SharingPostButtons;
