// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.5.0
pragma solidity ^0.8.27;

import {EIP3009} from "./EIP3009.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Coset is ERC20, EIP3009, Ownable {
    constructor(address initialOwner)
        EIP3009("Coset")
        ERC20("Coset", "CST")
        Ownable(initialOwner)
    {
        _mint(initialOwner, 1000000 * 10 ** decimals());
    }
    
    function decimals() public view override virtual returns (uint8) {
        return 6;
    }

    function version() public view returns (string memory) {
        return _EIP712Version();
    }
}