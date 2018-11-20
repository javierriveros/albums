import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';
import { PoseGroup } from 'react-pose';

import Box from '../animations/Box';

function AlbumsList(props) {
  return (
    <Grid container spacing={0} justify="center">
      <PoseGroup>
        {props.albums.map((album, index) => {
          return (
            <Box key={index} i={index} pose={props.mainAlbum ? 'exit' : 'enter'}>
              <AlbumCard album={album} setAlbum={props.setAlbum} />
            </Box>
          );
        })}
      </PoseGroup>
    </Grid>
  );
}

export default withStyles({})(AlbumsList);