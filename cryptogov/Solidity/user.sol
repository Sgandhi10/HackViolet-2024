// // SPDX-License-Identifier: GPL-3.0
// To Compile Run: solcjs --optimize --bin SecureUpdate.sol -o Smart_Contract_Binary

pragma solidity >=0.8.0 <0.9.0;

// Information on OpenZeppelin Contracts can be found at: https://docs.openzeppelin.com/contracts/4.x/access-control
import "node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract User is ERC20, AccessControl {
    // Roles
    // Note: The bottom 4 lines can be replaced with hard-coded hashes to save compute on deployment
    bytes32 private constant ADMIN = keccak256("ADMIN");
    bytes32 private constant EMPLOYEE = keccak256("EMPLOYEE");
    
    // Define User Struct
    struct user {
        string name;
        string email;
        string password;
        string role;
    }

    struct contract {
        string name;
        string description;
        
    }

    

    // Define 
}
```