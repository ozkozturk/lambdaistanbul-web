import React, { FC } from 'react';
import { Form, Input, Row, Col } from 'antd';
import Button from '../common/Button';
import HeadlineWithBorder from '../common/HeadlineWithBorder';
import Paragraph from '../common/Paragraph';
import Text from '../common/Text';
import { StyledHelpForm } from './styled';
import { HomePageHelpFormProps } from './types';

const HelpForm: FC<HomePageHelpFormProps> = () => {
  return (
    <StyledHelpForm>
      <Row>
        <Col span={12} offset={12}>
          <Form>
            <HeadlineWithBorder text="Do You Need Help?" borderColor="#fcb315" textColor="white" />
            <Paragraph>Contact us and we help you to solve any of your problem.</Paragraph>
            <Input.Group>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: 'required pls' },
                ]}
              >
                <Input placeholder="FULL NAME*" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'required pls' },
                  { type: 'email', message: 'email pls' },
                ]}
              >
                <Input placeholder="EMAIL ADDRESS*" />
              </Form.Item>
            </Input.Group>
            <Form.Item name="message">
              <Input.TextArea placeholder="YOUR MESSAGE" />
            </Form.Item>
            <Form.Item colon={false}>
              <Button htmlType="submit" backgroundColor="#F6B343" textColor="white" buttonWidth="160px">
                <Text>SUBMIT</Text>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </StyledHelpForm>
  );
};

export default HelpForm;
