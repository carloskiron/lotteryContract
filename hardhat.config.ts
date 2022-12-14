import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@typechain/hardhat';
import * as dotenv from 'dotenv'

dotenv.config();

const config: HardhatUserConfig = {
  paths: { tests: "test" },
  solidity: "0.8.17",
  networks: {
    hardhat: {
      hardfork: "merge"
    }
  },
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default config;
