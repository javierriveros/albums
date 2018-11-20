import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


function PhotosCarrousel(props) {
  return (
    // <Grid container spacing={1} justify="center">
    //   {props.photos.map((photo, index) => <AlbumCard photo={photo} key={index} setPhoto={props.setPhoto} />)}
    // </Grid>
    <div className={props.classes.container}>
      {props.photos.map((photo, index) => {
        return (
          <Card key={photo.id} className={props.classes.card}>
            <img src={photo.baseUrl} className={props.classes.img} alt="" />
            <CardContent>
              <Typography variant="caption" component="p">
                {photo.filename}
              </Typography>
            </CardContent>
          </Card>
        )
      })
      }
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