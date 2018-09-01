import React from "react";
import ReactDOM from "react-dom";
import Create from './components/Create';
import ItemList from './components/ItemList';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Route, Link, withRouter  } from "react-router-dom";
import { Button } from "@material-ui/core";


const New = withRouter(({ history }) => (
  <Button
    type='button'
    onClick={() => { history.push('/new') }}
  >
    New Part
  </Button>
))

const Home = withRouter(({ history }) => (
  <MenuIcon
    onClick={() => { history.push('/') }}
  >
  </MenuIcon>
))

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <div>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton color="inherit" aria-label="Menu">
                  <Home />
                </IconButton>
                {/* links  */}

                <New />
              </Toolbar>
            </AppBar>
            <Route path="/new" component={Create} />
            <Route path="/" component={ItemList} />
          </div>
        </Router>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));