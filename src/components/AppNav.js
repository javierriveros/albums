import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Login from '../Login';
import { withStyles } from '@material-ui/core/styles';

class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar className={this.props.classes.nav}>
            <Typography variant="h6" color="inherit" component="h1" className={this.props.classes.grow}>
              Albums
            </Typography>
            <Login />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles({
  grow: {
    flexGrow: 1,
    // fontFamily: 'Circular Std',
    textAlign: 'left',
  },
  nav: {
    color: 'white'
  }
})(AppNav);