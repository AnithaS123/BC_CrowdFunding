import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xFca4e5E14EcaF5FEe15b5e92a2Ce0f26bC5211Cf"
  // '0xE0EB312Ad10608963a6ad7Dc872Be6E166F9E5CF'
  // '0x2f1BeBc3948476D861B0480E3E8b1e20e82Ea5fb'
);

export default instance;
