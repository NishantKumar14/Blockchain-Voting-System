const { ethers, run, network } = require("hardhat");


const verify = async (contractAddress, args) => {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(e);
        }
    }
};

async function main() {
    const Election = await ethers.getContractFactory("Election");
    const ELECTION_CONTRACT = await Election.deploy();

    if (network.config.chainId === 5) {
        await ELECTION_CONTRACT.deployTransaction.wait(5);
        await verify(ELECTION_CONTRACT.address, []);
    } else {
        console.log("Deployed on Localhost")
    }
    console.log("Contract deployed to address: ", ELECTION_CONTRACT.address);
}


module.exports = main;