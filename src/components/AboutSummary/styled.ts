/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import Paragraph from '../common/Paragraph';

export const StyledAboutSummary = styled.section`
  margin: 50px 0;

  ${Paragraph} {
    line-height: 1.875em;
    color: #3A3D44;
    font-size: 1.25em;

    &:last-of-type {
      color: #787878;
      font-size: 1em;
    }
  }
`;
