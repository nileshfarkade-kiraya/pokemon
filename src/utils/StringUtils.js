function GetPokemonNumber(text) {
  const pokemonNumber = text.replace('https://pokeapi.co/api/v2/pokemon/', '');
  return pokemonNumber.match(/\d+/)
}

function ToTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export { GetPokemonNumber, ToTitleCase };