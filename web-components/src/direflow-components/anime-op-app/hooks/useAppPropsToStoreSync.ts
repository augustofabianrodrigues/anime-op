import { useEffect } from 'react';
import AnimeDetailStore from '../stores/AnimeDetailStore';
import SearchStore from '../stores/SearchStore';
import GenreStore from '../stores/GenreStore';
import AppProps from '../components/AppProps';

function useAppPropsToStoreSync({
  searchResults,
  genres,
  animeDetail,
}: AppProps) {
  useEffect(() => {
    SearchStore.update((s) => {
      s.results = { ...searchResults };
    });
  }, [searchResults]);

  useEffect(() => {
    GenreStore.update(() => genres);
  }, [genres]);

  useEffect(() => {
    AnimeDetailStore.update(() => animeDetail);
  }, [animeDetail]);
}

export default useAppPropsToStoreSync;
