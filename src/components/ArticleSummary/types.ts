export type ArticleSummaryTypes = {
  title: string;
  image: string;
  date: string;
  category: string;
  summary: string;
};

export interface ArticleSummaryProps {
  index: number;
  articleSummary: ArticleSummaryTypes;
}

export interface StyledProps {
  index: number;
}
