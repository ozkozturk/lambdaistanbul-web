export type AppCarouselItemTypes = {
  image?: string;
  text?: string;
  url?: string;
};

export interface AppCarouselProps {
  data: AppCarouselItemTypes[];
}
