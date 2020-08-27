/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';

export const StyledHelpForm = styled.div`
  margin: 50px 0%;
  padding: 60px;
  background-image: url("https://source.unsplash.com/1170x570?people");

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
`;
