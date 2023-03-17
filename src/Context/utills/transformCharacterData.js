export function transformCharacterData(charactersData) {
  return charactersData.map((characterData) => {
    return {
      id: characterData.id,
      image: characterData.image,
      name: characterData.name,
      species: characterData.species,
    };
  });
}
