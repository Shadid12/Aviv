import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import web3 from '../../etherium/web3';
import factory from '../../etherium/factory';

// css
import '../styles/card.sass';

export default class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      partName: '',
      price: '',
      lifeSpan: '',
      loading: false,
      errorMessage: ''
    }
  }


  create = async (event) => {
    event.preventDefault();
    this.setState({loading: true});
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('--->', factory.methods);
        await factory.methods
          .addItem(this.state.partName, this.state.price, this.state.lifeSpan)
          .send({
            from: accounts[0]
          });
        console.log('Created Now');
      } catch (err) {
        this.setState({ errorMessage: err.message });
    }

    console.log('Contract Created');
    this.setState({   loading: false, 
      errorMessage: '', 
      partName: '', 
      price: '',
      lifeSpan: '' });
  };

render() {
        return(
<div className="stuff-container">
        <div className="card">
          <div className="header-block">
            <h3>Add new Item</h3>
          </div>
          <div className="first-inputs">
              <div className="input-group">
                <TextField
                  label="Part Name"
                  placeholder="Name"
                  margin="normal"
                  value={this.state.partName}
                  onChange={event =>
                    this.setState({ partName: event.target.value })}
                />
              </div>
              <div className="input-group">
                <TextField
                  type="number"
                  label="Price ($)"
                  placeholder="Price"
                  margin="normal"
                  value={this.state.price}
                  onChange={event =>
                    this.setState({ price: event.target.value })}
                />
              </div>
              <div className="input-group">
                <TextField
                  type="number"
                  label="Life Span (Hours)"
                  placeholder="Life Span (Hours)"
                  margin="normal"
                  value={this.state.lifeSpan}
                  onChange={event =>
                    this.setState({ lifeSpan: event.target.value })}
                />
              </div>
          </div>
          <div className="first-inputs">
            <div className="input-group">


            {
              this.state.loading ? (
                <CircularProgress className="" />
              ) : (
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={this.create}
                >
                  Create
                </Button>
              )
            }


            </div>
          </div>
        </div>
      </div>


        )
    }
}