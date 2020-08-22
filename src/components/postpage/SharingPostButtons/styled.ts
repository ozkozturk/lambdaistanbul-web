import styled from '@emotion/styled';

const SharingPostButtonsStyled = styled.div`
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
`;

export default SharingPostButtonsStyled;
