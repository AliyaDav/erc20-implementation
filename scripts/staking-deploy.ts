import { ethers } from "hardhat";

const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const STAKING_TOKEN_ADDRESS = '0xd977a48e53eb31a03f764c6fa920c8e77c79ba08';
const REWARD_TOKEN_ADDRESS = '0x39d429694913e907a2d715ace6eb4b6e1b017110';

async function main() {

    const deployer = OWNER_ADDRESS;
    console.log("Deploying contracts with the account:", deployer);

    const Staking = await ethers.getContractFactory("StakingRewards");
    const staking = await Staking.deploy(STAKING_TOKEN_ADDRESS, REWARD_TOKEN_ADDRESS);

    await staking.deployed();

    console.log("staking deployed to:", staking.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });