export interface Image {
  src: string;
  alt: string;
}

export interface Article {
  id: number;
  headline: string;
  intro: string;
  image: Image;
  datetime: Date | string;
  section: string;
}
