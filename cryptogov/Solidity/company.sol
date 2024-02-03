// // SPDX-License-Identifier: GPL-3.0
// To Compile Run: solcjs --optimize --bin SecureUpdate.sol -o Smart_Contract_Binary

pragma solidity >=0.8.0 <0.9.0;

// Information on OpenZeppelin Contracts can be found at: https://docs.openzeppelin.com/contracts/4.x/access-control
import "node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Company is ERC20, AccessControl {
    // Roles
    bytes32 private constant ADMIN = keccak256("ADMIN");
    bytes32 private constant EMPLOYEE = keccak256("EMPLOYEE");
    
    // Define User Struct
    struct user {
        string firstName;
        string lastName;
        string email;
        string password;
    }

    struct contract {
        string name;
        string description;
    }

    
}

contract Set {
    // Define Set Variables
    address[] values;
    mapping(address => bool) is_in;

    function add(address a) public {
        if (!is_in[a]) {
            values.push(a);
            is_in[a] = true;
        }
    }

    function has(address a) public view returns (bool) {
        return is_in[a];
    }
}