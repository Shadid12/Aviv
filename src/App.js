import React from "react";
import ReactDOM from "react-dom";
import Create from './components/Create';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Create />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));