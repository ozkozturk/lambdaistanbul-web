import styled from '@emotion/styled';
import { StyledProps } from './types';

const colors = ['#e85242', '#fcb315', '#03a8cb'];

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ index }: StyledProps) => (index % 2 === 0 ? 'row' : 'row-reverse')};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background: ${({ index }: StyledProps) => colors[index]};
    height: 100%;
    width: 3px;
    right: ${({ index }: StyledProps) => (index % 2 === 0 ? 0 : '100%')};
  }
`;

export const StyledArticleSummary = styled.div``;
