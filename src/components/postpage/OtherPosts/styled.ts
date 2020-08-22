import styled from '@emotion/styled';

const OtherPostsStyled = styled.div`
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

export default OtherPostsStyled;
