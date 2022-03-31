const { ethers } = require("hardhat");

describe("MyToken", () => {
  it("check if the contract sent a 1000 coins to the sender", async () => {
    const accounts = await ethers.getSigners()
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    await myToken.deployed();

    console.log(ethers.utils.formatEther(await myToken.balanceOf(accounts[0].address)));
  })
})