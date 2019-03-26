export interface BarButtonText {
  type: 'text';
  title: string;
}

export interface BarButtonImage {
  type: 'image';
  image: null;
}

export type BarButton =
  | BarButtonText
  | BarButtonImage & {
      id: string;
      disabled?: boolean;
    };
