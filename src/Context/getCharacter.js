export async function getCharacters(api) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${api}`
  );
  const data = await response.json();

  return data;
}
