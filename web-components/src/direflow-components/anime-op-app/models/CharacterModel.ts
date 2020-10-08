interface CharacterModel {
  id: string;
  canonicalName: string;
  names?: {
    [lang: string]: string;
  };
  description?: string;
  image: {
    original: string;
  };
  otherNames?: string[];
}

export default CharacterModel;
