import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { green500, orange500 } from 'material-ui/styles/colors';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMessage: false
        }

        this.displayMessage = this.displayMessage.bind(this);
    }

    displayMessage() {
        this.setState({
            showMessage: true
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="flexcenter">
                    <IconButton tooltip="Click Me!">
                        <FontIcon color={orange500} hoverColor={green500} onTouchTap={this.displayMessage} className="material-icons">stars</FontIcon>
                    </IconButton>
                    {this.state.showMessage && <span>It works!</span>}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
