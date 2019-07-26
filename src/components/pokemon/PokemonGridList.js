import React from 'react';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';

import * as PokemonActions from '../../redux/actions/PokemonActions';
import PokemonGridListItem from './PokemonGridListItem';
import { Button } from '@material-ui/core';

class PokemonGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preAction  : '',
      nextAction : '',
    }

    this.getPrevious = this.getPrevious.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  getPrevious() {
    this.props.getPokemons(this.props.previous);
  }

  getNext() {
    this.props.getPokemons(this.props.next);
  }
  
  componentWillMount() {
    this.props.getPokemons();
  }

  render() {
    const { results } = this.props;
    return (
      <React.Fragment>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>  
      <GridList cellHeight={180} >
        {results.map((pokemon, key) => (
          <PokemonGridListItem
            key={`pgli${key}`}
            name={pokemon.name}
            url={pokemon.url} />
        ))}
      </GridList>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ marginRight: 640 }}>
          <Button style={{ backgroundColor: '#228B22' }} onClick={ (e) => this.getPrevious()}>Pre</Button>
        </div>
        <div style={{ alignItems: 'right' }}>  
          <Button style={{ backgroundColor: '#228B22' }} onClick={ (e) => this.getNext()}>Next</Button>
        </div>  
      </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemons(action) {
      dispatch(PokemonActions.getPokemons(action));
    }
  }
};

const mapStateToProps = state => ({
  ...state.pokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGridList);