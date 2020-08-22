import React, { FC } from 'react';
import { OtherPostsProps } from './types';
import OtherPostsStyled from './styled';

const OtherPosts: FC<OtherPostsProps> = () => {
  return (
    <OtherPostsStyled>
      <div className="other-posts">
        <div className="post-card">
          <div className="post-card-front">
            <p>invisible</p>
          </div>
          <div className="post-card-back">
            <p>
              <a href="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </a>
            </p>
            <small>
              <a href="/">9 July 2020</a>
            </small>
          </div>
        </div>
        <div className="post-card">
          <div className="post-card-front">
            <p>invisible</p>
          </div>
          <div className="post-card-back">
            <p>
              <a href="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </a>
            </p>
            <small>
              <a href="/">9 July 2020</a>
            </small>
          </div>
        </div>
        <div className="post-card">
          <div className="post-card-front">
            <p>invisible</p>
          </div>
          <div className="post-card-back">
            <p>
              <a href="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </a>
            </p>
            <small>
              <a href="/">9 July 2020</a>
            </small>
          </div>
        </div>
      </div>
    </OtherPostsStyled>
  );
};

export default OtherPosts;
