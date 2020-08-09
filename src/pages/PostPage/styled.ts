import styled from '@emotion/styled';

export const PostPageStyled = styled.div`
  width: 80%;
  background-color: white;
  margin: 120px auto;
`;

export const PostPageContentStyled = styled.div`
  width: 65%;
  border: 1px solid #e4e4e4;

  .post-media {

   .media {
    width: 100%;
   }
  }

  .post-content {
    padding: 55px;
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

  .share-post {
    display: flex;
    height: 60px;

    a {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: crimson;
      color: white;
    }

    a:hover {
      background-color: rgba(120, 120, 120, 0.2);
      color: crimson;
    }
  }
`;
