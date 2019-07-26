import { GET_POKEMON_SUCCESS, GET_POKEMON_ERROR } from '../../constants/ApiConstants';
import Pokemon from '../api/Pokemon';

export function getPokemons(apiUrl) {
  return dispatch => {
    Pokemon.getPokemons(apiUrl)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: GET_POKEMON_SUCCESS, data: json });
      })
      .catch(err => {
        dispatch({ type: GET_POKEMON_ERROR, data: err });
      })
  }
}