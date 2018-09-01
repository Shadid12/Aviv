import React from "react";
import { Divider } from "@material-ui/core";
import { withRouter } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// crypto Shit
import web3 from '../../etherium/web3';
import factory from '../../etherium/factory';

// css
import '../styles/card.sass';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          item: {},
          sku: 0,
          loading: false
        }
    }


    getItem = async(event) => {
        this.setState({ loading: true });
        try {
            const accounts = await web3.eth.getAccounts();
            const aItem = await factory.methods
              .fetchItem(this.state.sku)
              .call();
            
            this.setState({ loading: false, item: aItem });
            console.log('-->', aItem);
          } catch (err) {
            this.setState({ errorMessage: err.message });
        }
    }

    render() {
        return(
            <div className="stuff-container">
                 <div className="card">
                    <div className="header-block">
                        <h3>Get Item by Sku</h3>
                    </div>

                    <div className="first-inputs">
                            <div className="input-group">
                                <TextField
                                    label="Sku"
                                    placeholder="Sku"
                                    margin="normal"
                                    value={this.state.sku}
                                    onChange={event =>
                                        this.setState({ sku: event.target.value })}
                                />
                            </div>
                    </div>

                    <div className="first-inputs">
                        <div className="input-group">
                            <Button 
                                variant="contained" 
                                color="primary"
                                onClick={this.getItem}
                            >
                                Get Item
                            </Button>
                        </div>
                    </div>
                    {
                        this.state.item ? (
                            <div className="first-inputs">
                                <div className="input-group">
                                    <pre>
                                        {JSON.stringify(this.state.item, null, 2) }
                                    </pre>
                                </div>
                            </div>
                        ) : null
                    }
                 </div>
            </div>
        )
    }
}

export default withRouter(ItemList);