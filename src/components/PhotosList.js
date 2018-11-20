import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PhotosCarrousel from './PhotosCarrousel';

function PhotosList(props) {
  return (<div>
    {props.album && [
      <Typography variant="h4" component="h2">{props.album ? props.album.title : ''}</Typography>,
      <Button>Regresar</Button>,
      <Typography variant="headline" component="h3">Album Photos</Typography>,
      <Typography variant="caption" component="p">{props.photos.length} photo(s) in this album</Typography>,
      <PhotosCarrousel photos={props.photos} />
    ]}
  </div>);
}


export default withStyles({})(PhotosList);

