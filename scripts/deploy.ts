import { network } from "hardhat";
import { ask, rl } from "./cmd.js";

const main = async () => {
    try {
        const networkName = await ask("Network: ");
        const { ethers } = await network.connect({ network: networkName });
        const initialOwner = "0x3F2e72283f1E29b7cb4402511C41b60FB4900B57";
        const CosetFactory = await ethers.getContractFactory("Coset");
        const coset = await CosetFactory.deploy(initialOwner);

        await coset.waitForDeployment();

        console.log("Coset deployed to:", await coset.getAddress());
        rl.close();
    } catch (error) {
        console.error(error);
        rl.close();
    }
};

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
