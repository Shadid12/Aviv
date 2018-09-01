import web3 from './web3';
import SupplyChain from './build/SupplyChain.json';

const instance = new web3.eth.Contract(
  JSON.parse(SupplyChain.interface),
  '0xAAf108BE1dA8d5A1b844EcB27046B24D69C3bD0c'
);

export default instance;