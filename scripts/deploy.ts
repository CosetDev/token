import { network } from "hardhat";

const main = async () => {
    const { ethers } = await network.connect();
    const initialOwner = "0x3F2e72283f1E29b7cb4402511C41b60FB4900B57";
    const CosetFactory = await ethers.getContractFactory("Coset");
    const coset = await CosetFactory.deploy(initialOwner);

    await coset.waitForDeployment();

    console.log("Coset deployed to:", await coset.getAddress());
};

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
