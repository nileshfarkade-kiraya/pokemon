import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'

import './assets/styles/app.css'
import History from './utils/History';
import PokemonGridList from './components/pokemon/PokemonGridList';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <div className="App">
          <Route exact path={'/'} component={PokemonGridList} />
        </div>
      </Router>
    );
  }
}

export default App;
