require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("dotenv").config();

const { GOERLI_RPC_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "goerli",
    networks: {
        goerli: {
            chainId: 5,
            blockConfirmations: 1,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            saveDeployments: true,
        }
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
};