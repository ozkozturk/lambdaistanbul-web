import styled from '@emotion/styled';

export const PostPageStyled = styled.div`
  width: 80%;
  background-color: white;
  margin: 120px auto;
`;

export const PostPageContentStyled = styled.div`
  width: 65%;

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

  .prev-next-posts {
    display: flex;
    margin-top: 40px;

    .prev-post {
      text-align: left;
      width: 50%;
      margin-right: 10px;
      padding: 55px 60px;
      background-image: url("https://source.unsplash.com/random?pride");
    }

    .next-post {
      text-align: right;
      width: 50%;
      margin-left: 10px;
      padding: 55px 60px;
      background-image: url("https://source.unsplash.com/random?pride");
    }

    h3 {
      color: white;
    }
  }

  .other-posts {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    .post-card {
      width: 32%;
      min-height: 250px;
      background-image: url("https://source.unsplash.com/random?pride");
      position: relative;
      perspective: 1500px;

      &:hover {

        .post-card-front {
          transform: rotateX(180deg);
        }

        .post-card-back {
          transform: rotateX(0);
        }
      }

      .post-card-front, .post-card-back {
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transition: transform .8s;
        position: absolute;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }

      .post-card-front {
        display: none;
      }

      .post-card-back {
        background-color: rgba(0, 0, 0, 0.4);
        transform: rotateX(-180deg);

        a {
          color: #ffffff;
        }

        a:hover {
          color: orange;
        }
      }
    }

  }
`;
