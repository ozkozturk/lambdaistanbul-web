import styled from '@emotion/styled';

const PostPageContentStyled = styled.div`
  width: 100%;

  .post-media {

   .media {
    width: 100%;
   }
  }

  .post-content {
    padding: 55px;
    border: 1px solid #e4e4e4;
  }

  .entry-header {
    margin-bottom: 20px;

    .entry-meta {

      span {
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        margin-right: 9px;
      }
    }

    h2 {
      font-size: 30px;
    }
  }

  .entry-content {
    blockquote {
      padding: 15px;
      background-color: #eee;
      border-radius: 5px;

      footer {
        text-align: right;
      }
    }

    ul {
      display: inline-block;
      width: 50%;
      margin-bottom: 40px;
    }

    .inline-section {
      display: flex;

      img {
        margin: 5px 30px 15px 0;
      }

    }
  }
`;

export default PostPageContentStyled;
