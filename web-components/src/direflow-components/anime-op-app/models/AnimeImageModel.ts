import AnimeImageMetaModel from './AnimeImageMetaModel';

interface AnimeImageModel {
  tiny?: string;
  small?: string;
  medium?: string;
  large?: string;
  original?: string;
  meta?: AnimeImageMetaModel;
}

export default AnimeImageModel;
