import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// css
import '../styles/card.sass';

export default class Create extends React.Component {
    render() {
        return(
<div className="stuff-container">
        <div className="card">
          <div className="header-block">
            <h3>Initiate New Contract</h3>
          </div>
          <div className="first-inputs">
              <div className="input-group">
                <TextField
                  label="Part Name"
                  placeholder="Name"
                  margin="normal"
                />
              </div>
              <div className="input-group">
                <TextField
                  label="SKU"
                  placeholder="SKU"
                  margin="normal"
                />
              </div>
              <div className="input-group">
                <TextField
                  type="number"
                  label="Price ($)"
                  placeholder="Price"
                  margin="normal"
                />
              </div>
          </div>
          <div className="first-inputs">
              <div className="input-group">
                <TextField
                  label="Buyer ID"
                  placeholder="Buyer ID"
                  margin="normal"
                />
              </div>
              <div className="input-group">
                <TextField
                  label="Seller ID"
                  placeholder="Seller ID"
                  margin="normal"
                />
              </div>
              <div className="input-group">
                <TextField
                  type="number"
                  label="Service Hours"
                  placeholder="Service Hours"
                  margin="normal"
                />
              </div>
          </div>
          <div className="first-inputs">
            <div className="input-group">
                <TextField
                  label="# of Services"
                  type="number"
                  placeholder="# of Services"
                  margin="normal"
                />
              </div>
          </div>
          <div className="first-inputs">
            <div className="input-group">
              <Button 
                variant="contained" 
                color="primary" 
              >
                Create
              </Button>
            </div>
          </div>
        </div>
      </div>


        )
    }
}