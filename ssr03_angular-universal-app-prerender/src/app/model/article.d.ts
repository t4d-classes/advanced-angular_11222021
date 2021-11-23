export interface Article extends ArticleCard {
  description: string;
  cover: Image;
}

export interface ArticleCard {
  title: string;
  slug: string;
}

export interface Image {
  src: string;
  alt: string;
}