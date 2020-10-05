interface AnimeSearchResultModel {
  id: string;
  canonicalTitle: string;
  averageRating: number;
  subtype: string;
  posterImage: {
    original: string;
  };
}

export default AnimeSearchResultModel;
