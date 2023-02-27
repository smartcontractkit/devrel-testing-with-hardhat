const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
import { ethers } from "hardhat";


describe("GameItem Contract", function () {
    async function deployTokenFixture() {
        const GameItem = await ethers.getContractFactory("GameItem");
        const gameItem = await GameItem.deploy();
        const [owner, addr1, addr2] = await ethers.getSigners();
        await gameItem.deployed();
        const mintTx = await gameItem.awardItem(owner.address, 'https://game.example/item-id-1.json');
        await mintTx.wait();
        return { gameItem, owner, addr1, addr2 };
    }
    it("Should Mint a new token", async function () {
        const { gameItem, owner } = await loadFixture(deployTokenFixture);
        expect(await gameItem.balanceOf(owner.address)).to.equal(1);
    });
    it("Should set the owner of the token", async function () {
        const { gameItem, owner } = await loadFixture(deployTokenFixture);
        expect(await gameItem.ownerOf(0)).to.equal(owner.address);
    });
    it("Should set the tokenURI", async function () {
        const { gameItem, owner } = await loadFixture(deployTokenFixture);
        expect(await gameItem.tokenURI(0)).to.equal('https://game.example/item-id-1.json');
    });
    it("Should transfer the token", async function () {
        const { gameItem, owner, addr1 } = await loadFixture(deployTokenFixture);
        const transferTx = await gameItem.transferFrom(owner.address, addr1.address, 0);
        await transferTx.wait();
        expect(await gameItem.ownerOf(0)).to.equal(addr1.address);
    });
    it("Should not transfer the token if not owner", async function () {
        const { gameItem, owner, addr1 } = await loadFixture(deployTokenFixture);
        await expect(gameItem.connect(addr1).transferFrom(owner.address, addr1.address, 0)).to.be.revertedWith('ERC721: caller is not token owner or approved');
    });
    it("Should not mint if not owner", async function () {
        const { gameItem, addr1 } = await loadFixture(deployTokenFixture);
        await expect(gameItem.connect(addr1).awardItem(addr1.address, 'https://game.example/item-id-1.json')).to.be.revertedWith('Ownable: caller is not the owner');
    });
})