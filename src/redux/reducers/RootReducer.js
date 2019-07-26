import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import PokemonReducer from './PokemonReducer';

const rootReducer = combineReducers({
  pokemons: PokemonReducer
});

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));
const store = createStore(rootReducer, middleware);

export default store;
