export interface ImageProps {
  alt?: string;
  loadWidth: number;
  loadHeight: number;
  loadThreshold?: number;
  onClick?: () => void;
  src: string;
}
