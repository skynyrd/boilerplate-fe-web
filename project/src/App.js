import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  render() {
    return (
      <div>
        <FlatButton label="Delete Me" primary={true} />
      </div>
    );
  }
}

export default App;
