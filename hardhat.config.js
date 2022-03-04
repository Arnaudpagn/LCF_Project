require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: __dirname + "/.env.local" });
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

const projectId = process.env.NEXT_PUBLIC_PROJECTID;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
      gasPrice: 35000000000,
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      account: [privateKey],
    },
  },
  solidity: "0.8.4",
};
