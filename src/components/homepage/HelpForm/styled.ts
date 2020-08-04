import styled from '@emotion/styled';

const HomePageHelpFormStyled = styled.div`
  margin-top: 100px;
  padding: 60px;
  background-image: url("https://source.unsplash.com/1170x570?people");
  display: flex;
  justify-content: flex-end;

  .help-form {
    width: 50%;
    padding: 30px;
    color: #e0e0e1;

    h2 {
      padding: 15px 0 15px 30px;
      font-size: 40px;
      border-left: 2px solid #03a8cb;
      color: #e0e0e1;
    }

    .ant-input-group {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    Input, TextArea {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      font-size: 16px;
      line-height: 30px;
      padding: 15px 30px;
    }

     TextArea {
     height: 140px;
     }
  }
`;

export default HomePageHelpFormStyled;
