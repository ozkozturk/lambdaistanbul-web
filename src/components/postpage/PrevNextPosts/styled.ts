import styled from '@emotion/styled';

const PrevNextPostsStyled = styled.div`
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
`;

export default PrevNextPostsStyled;
