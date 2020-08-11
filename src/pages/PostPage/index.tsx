import React, { FC } from 'react';
import { PostPageProps } from './types';
import PostPageStyled from './styled';
import PostPageContentStyled from '../../components/postpage/Article/styled';
import Article from '../../components/postpage/Article';
import SharingPostButtons from '../../components/postpage/SharingPostButtons';
import PrevNextPosts from '../../components/postpage/PrevNextPosts';
import OtherPosts from '../../components/postpage/OtherPosts';

const PostPage: FC<PostPageProps> = ({ text }) => {
  return (
    <PostPageStyled>
      <PostPageContentStyled>
        <Article text="" />
        <SharingPostButtons text="" />
        <PrevNextPosts text="" />
        <OtherPosts text="" />
      </PostPageContentStyled>
    </PostPageStyled>
  );
};

export default PostPage;
