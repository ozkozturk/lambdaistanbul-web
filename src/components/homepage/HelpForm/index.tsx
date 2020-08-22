import React, { FC } from 'react';
import { Form, Input } from 'antd';
import HomePageHelpFormStyled from './styled';
import { HomePageHelpFormProps } from './types';
import AppButton from '../../common/Button';
import BorderedHeadline from '../../common/BorderedHeadline';

const HelpForm: FC<HomePageHelpFormProps> = () => {
  return (
    <HomePageHelpFormStyled>
      <div className="help-form">
        <BorderedHeadline text="Do You Need Help?" borderColor="#fcb315" textColor="white" />
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
            <AppButton text="SEND NOW!" bgColor="#F6B343" textColor="white" buttonWidth="160px" />
          </Form.Item>
        </Form>
      </div>
    </HomePageHelpFormStyled>
  );
};

export default HelpForm;
