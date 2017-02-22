import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <FlatButton label="Delete Me" primary={true} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
