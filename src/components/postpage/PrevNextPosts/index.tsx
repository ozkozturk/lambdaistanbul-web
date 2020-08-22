import React, { FC } from 'react';
import { PrevNextPostsProps } from './types';
import PrevNextPostsStyled from './styled';

const PrevNextPosts: FC<PrevNextPostsProps> = () => {
  return (
    <PrevNextPostsStyled>
      <div className="prev-next-posts">
        <a className="prev-post" href="/">
          <small>Previous Post</small>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
        </a>
        <a className="next-post" href="/">
          <small>Next Post</small>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
        </a>
      </div>
    </PrevNextPostsStyled>
  );
};

export default PrevNextPosts;
