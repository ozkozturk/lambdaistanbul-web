import React, { FC } from 'react';
import { Row, Col } from 'antd';
import { PostPageProps } from './types';
import PostPageStyled from './styled';
import PostPageContentStyled from '../../components/postpage/Article/styled';
import Article from '../../components/postpage/Article';
import SharingPostButtons from '../../components/postpage/SharingPostButtons';
import PrevNextPosts from '../../components/postpage/PrevNextPosts';
import OtherPosts from '../../components/postpage/OtherPosts';

const Left = () => {
  return (
    <Row>
      <Col span={8} push={16}>
        Aside
      </Col>
      <Col span={16} pull={8}>
        <Article text="" contentSide="" />
        <SharingPostButtons text="" />
        <PrevNextPosts text="" />
        <OtherPosts text="" />
      </Col>
    </Row>
  );
};

const Right = () => {
  return (
    <Row>
      <Col span={16} push={8}>
        <Article text="" contentSide="" />
        <SharingPostButtons text="" />
        <PrevNextPosts text="" />
        <OtherPosts text="" />
      </Col>
      <Col span={8} pull={16}>
        Aside
      </Col>
    </Row>
  );
};

const Center = () => {
  return (
    <Row>
      <Col span={24}>
        <Article text="" contentSide="" />
        <SharingPostButtons text="" />
        <PrevNextPosts text="" />
        <OtherPosts text="" />
      </Col>
    </Row>
  );
};

const PostPage: FC<PostPageProps> = ({ text, contentSide }) => {
  return (
    <PostPageStyled>
      <PostPageContentStyled>
        {
          contentSide === 'left'
            ? <Left />
            : contentSide === 'right' ? <Right /> : <Center />
        }
      </PostPageContentStyled>
    </PostPageStyled>
  );
};

export default PostPage;
