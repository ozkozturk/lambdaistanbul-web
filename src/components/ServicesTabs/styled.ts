import { Row } from 'antd';
import styled from '@emotion/styled';
import Paragraph from '../common/Paragraph';

export const Service = styled.div``;

export const ServiceInfo = styled.div``;

export const ServiceImage = styled.div``;

export const ServiceText = styled.div``;

export const StyledServicesTabs = styled.div``;

export const StyledRow = styled(Row)`
  ${ServiceInfo} {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 2em 1em;

    ${ServiceText} {
      max-width: 55%;
    }

    a,
    ${Paragraph} {
      color: #ffffff;
    }

    a {
      font-size: 1.5em;
    }

    ${Paragraph} {
      line-height: 1.5em;
    }

    img {
      border-radius: 50%;
      border: 10px solid #ffffff;
    }
  }
`;
