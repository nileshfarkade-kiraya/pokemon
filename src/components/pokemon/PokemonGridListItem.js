import React from 'react';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { GetPokemonNumber, ToTitleCase } from '../../utils/StringUtils';

const PokemonGridListItem = (props) => (
  <GridListTile style={{ height: 250, width: 250, margin: 5, borderStyle: 'solid', borderWidth: 1 }}>
    <GridListTileBar
      title={ToTitleCase(props.name)}
      actionIcon={
        GetPokemonNumber(props.url)
      }
      titlePosition='top'
      style={{ backgroundColor: '#228B22' }}
    />
    <img
      src={
        GetPokemonNumber(props.url) !== null ?
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${GetPokemonNumber(props.url)}.png`
          :
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
      alt={props.name} />
  </GridListTile>
);

PokemonGridListItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default PokemonGridListItem;