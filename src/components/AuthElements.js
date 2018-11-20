import React from 'react';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';

const AuthElements = function (props) {
  const logInButton = () => {
    if (props.user) {
      return (
        [<Avatar src={props.user.photoURL} />, (<IconButton onClick={props.logout} color="inherit"><ExitToApp /></IconButton>)]
      );
    }
    return (<Button variant="contained" onClick={props.login} >
      Sign in with Google
  </Button>);
  };

  return (
    //className={this.props.classes.container}
    <div className={props.classes.container}>
      {logInButton()}
    </div>
  );
}

export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row'
  }
})(AuthElements);