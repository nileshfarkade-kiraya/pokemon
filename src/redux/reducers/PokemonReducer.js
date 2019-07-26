import * as ApiConstants from '../../constants/ApiConstants';

const defaultStatate = {
  previous: null,
  results: [
    {
      url: '',
      name: ''
    }
  ],
  next: null
};

const PokemonReducer = (state = defaultStatate, action = {}) => {
  switch (action.type) {
    case ApiConstants.GET_POKEMON_SUCCESS: {
      return {
        ...state,
        ...action.data,
        error: false
      }
    }
    case ApiConstants.GET_POKEMON_ERROR: {
      return {
        ...state,
        error: action.data
      }
    }
    default: {
      return state;
    }
  }
};

export default PokemonReducer;