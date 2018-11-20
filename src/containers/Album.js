import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPhotos, clearPhotos } from '../initializers/actions';

import PhotosList from '../components/PhotosList';

class Album extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.mainAlbum) {
      if (process.env.NODE_ENV === 'production') {
        this.loadPhotos();
      } else {
        import('../data/photos').then(module => {
          this.props.setPhotos(module.default.mediaItems);
        });
      }
    }
  }

  loadPhotos() {
    axios({
      url: 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.props.token}`
      },
      data: {
        albumId: this.props.mainAlbum.id
      }
    }).then(r => {
      this.props.setPhotos(r.data.mediaItems)
    }).catch(console.log);
  }

  render() {
    return (
      <PhotosList album={this.props.mainAlbum} photos={this.props.photos} />
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  mainAlbum: state.mainAlbum,
  photos: state.photos
})

const mapDispatchToProps = {
  setPhotos,
  clearPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);