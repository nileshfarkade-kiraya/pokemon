import Request from './Request';

class Pokemon {
  getPokemons(apiUrl) {
    return Request.connection('GET', apiUrl)
  }
}

export default new Pokemon();