pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    address private _owner;

    constructor() ERC20("MyToken", "TKN") {
        _owner = _msgSender();
        _mint(_msgSender(), 10000 * 10**18);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "the address can't be the zero address!");
        _mint(to, amount);
    }
}
