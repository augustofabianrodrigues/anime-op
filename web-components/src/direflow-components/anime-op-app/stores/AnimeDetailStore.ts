import { Store } from 'pullstate';
import AnimeDetailModel from '../models/AnimeDetailModel';
import Optional, { empty } from '../models/Optional';

const AnimeDetailStore = new Store<Optional<AnimeDetailModel>>(empty());
export default AnimeDetailStore;
