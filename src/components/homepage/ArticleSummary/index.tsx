import React, { FC } from 'react';
import { StyledWrapper } from './styled';
import { ArticleSummaryProps } from './types';

const ArticleSummary: FC<ArticleSummaryProps> = ({ articleSummary, index }) => {
  return (
    <StyledWrapper index={index}>
      <figure>
        <img src={articleSummary.image} alt={articleSummary.title} />
      </figure>
      <div>
        <h2>{articleSummary.title}</h2>
        <div>
          <div>{articleSummary.date}</div>
          <div>{articleSummary.category}</div>
        </div>
        <div>{articleSummary.summary}</div>
      </div>
    </StyledWrapper>
  );
};

export default ArticleSummary;
