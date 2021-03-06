import React, { Component } from 'react';
import AuthElements from '../components/AuthElements';
import firebase from '../initializers/firebase';

import { connect } from 'react-redux';
import { saveToken, clearToken } from '../initializers/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

  }

  login() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/photoslibrary.readonly");
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        let accessToken = result.credential.accessToken;
        this.props.saveToken(accessToken);
      }).catch(err => {
        console.log(err);
      })
  }

  logout() {
    firebase.auth().signOut().then(() => this.props.clearToken())
  }

  render() {
    return (
      <AuthElements
        login={this.login}
        logout={this.logout}
        user={this.props.user}
        token={this.props.token} />
    );
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user
  }
}


const mapDispatchToProps = {
  saveToken,
  clearToken
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);