import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';
import { setAlbum } from '../initializers/actions';

function AlbumsList(props) {
  return (
    <Grid container spacing={1} justify="center">
      {props.albums.map((album, index) => <AlbumCard album={album} key={index} setAlbum={props.setAlbum} />)}
    </Grid>
  );
}

export default withStyles({})(AlbumsList);