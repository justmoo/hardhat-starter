const { ethers } = require("hardhat");
let { networkConfig } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  const Token = await deploy("MyToken", {
    from: deployer,
    log: true,
  });

  const tokenContract = await ethers.getContractFactory("MyToken");
  const accounts = await ethers.getSigners();
  const singer = accounts[0];

  const token = new ethers.Contract(
    Token.address,
    tokenContract.interface,
    singer
  );

  const networkName = networkConfig[chainId]["name"];

  log(
    `Verify with : \n  npx hardhat verify --network ${networkName}  ${token.address}`
  );
};
