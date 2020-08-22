export type ArticleSummary = {
  title: string;
  image: string;
  date: string;
  category: string;
  summary: string;
};

export interface ArticleSummaryProps {
  index: number;
  articleSummary: ArticleSummary;
}

export interface StyledProps {
  index: number;
}
