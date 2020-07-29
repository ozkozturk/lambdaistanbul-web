import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button, Form, Input } from 'antd';

interface HomePageHelpFormProps {
  text: string;
}

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

     Button {
      min-width: 170px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fcb315;
      font-size: 16px;
      line-height: 30px;
      color: #e0e0e1;
      border-radius: 10px;
      border: none;
      padding: 25px 30px;
     }

     Button:hover {
      color: #3a3d44;
      outline: none;
     }
  }
`;

const HomePageHelpForm: FC<HomePageHelpFormProps> = () => {
  return (
    <HomePageHelpFormStyled>
      <div className="help-form">
        <h2>Do You Need Help?</h2>
        <p>Contact us and we help you to solve any of your problem.</p>
        <Form>
          <Input.Group>
            <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
              <Input placeholder="FULL NAME*" />
            </Form.Item>
            <Form.Item name={['user', 'email']} rules={[{ required: true }, { type: 'email' }]}>
              <Input placeholder="EMAIL ADDRESS*" />
            </Form.Item>
          </Input.Group>
          <Form.Item name={['user', 'message']}>
            <Input.TextArea placeholder="YOUR MESSAGE" />
          </Form.Item>
          <Form.Item colon={false}>
            <Button>
              SEND NOW
            </Button>
          </Form.Item>
        </Form>
      </div>
    </HomePageHelpFormStyled>
  );
};

export default HomePageHelpForm;
