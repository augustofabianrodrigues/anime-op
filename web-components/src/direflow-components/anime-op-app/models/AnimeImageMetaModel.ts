import AnimeImageMetaDimensionModel from './AnimeImageMetaDimensionModel';

interface AnimeImageMetaModel {
  dimensions?: {
    tiny?: AnimeImageMetaDimensionModel;
    small?: AnimeImageMetaDimensionModel;
    medium?: AnimeImageMetaDimensionModel;
    large?: AnimeImageMetaDimensionModel;
  };
}

export default AnimeImageMetaModel;
