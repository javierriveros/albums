import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { PoseGroup } from 'react-pose';

import Box from '../animations/Box';

function PhotosCarrousel(props) {
  return (
    // <Grid container spacing={1} justify="center">
    //   {props.photos.map((photo, index) => <AlbumCard photo={photo} key={index} setPhoto={props.setPhoto} />)}
    // </Grid>
    <div className={props.classes.container}>
      <PoseGroup>
        {props.photos.map((photo, index) => {
          return (
            <Box key={photo.id} className={props.classes.card} i={index}>
              <Card>
                <img src={photo.baseUrl} className={props.classes.img} alt="" />
                <CardContent>
                  <Typography variant="caption" component="p">
                    {photo.filename}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          )
        })
        }
      </PoseGroup>
    </div>
  );
}

export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    padding: '1em 0'
  },
  img: {
    width: '100%',
    height: 'auto'
  },
  card: {
    minWidth: '300px',
    marginRight: '1em'
  }
})(PhotosCarrousel);