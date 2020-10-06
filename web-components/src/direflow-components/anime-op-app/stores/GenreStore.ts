import { Store } from 'pullstate';
import GenreModel from '../models/GenreModel';

const GenreStore = new Store<GenreModel[]>([]);
export default GenreStore;
