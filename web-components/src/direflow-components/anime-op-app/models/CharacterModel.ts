interface CharacterModel {
  id: string;
  canonicalName: string;
  description?: string;
  image: {
    original: string;
  };
  otherNames?: string[];
}

export default CharacterModel;
