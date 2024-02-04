pragma solidity ^0.8.19;

// // SPDX-License-Identifier: GPL-3.0
// To Compile Run: solcjs --optimize --bin SecureUpdate.sol -o Smart_Contract_Binary



// Information on OpenZeppelin Contracts can be found at: https://docs.openzeppelin.com/contracts/4.x/access-control
import "../node_modules/@openzeppelin/contracts/access/AccessControl.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Company is ERC20, AccessControl {
    // Roles
    bytes32 private constant ADMIN = keccak256("ADMIN");
    bytes32 private constant EMPLOYEE = keccak256("EMPLOYEE");

    struct user {
        string firstName;
        string lastName;
        string email;
        int hourlyWage;
        int[] contracts;
    }

    struct gov_contract {
        string name;
        string description;
        string status;
        int cid;
        int hoursWorked;
        int cost;
    }

    // Set of Contracts
    mapping (int => gov_contract) private contracts;

    mapping (address => user) private users;

    // Constructor
    constructor() ERC20("MyToken", "TKN") {
        _grantRole(ADMIN, msg.sender);
    }

    // Add User
    function addUser(string memory _firstName, string memory _lastName, string memory _email, int _hourlyWage, address _user) public {
        require(
            hasRole(ADMIN, msg.sender),
            "Only the admin can add users"
        );
        users[_user] = user(_firstName, _lastName, _email, _hourlyWage, new int[](0));
        _grantRole(EMPLOYEE, _user);
    }

    // Add Admin
    function addAdmin(string memory _firstName, string memory _lastName, string memory _email, int _hourlyWage, address _user) public {
        require(
            hasRole(ADMIN, msg.sender),
            "Only the admin can add users"
        );
        users[_user] = user(_firstName, _lastName, _email, _hourlyWage, new int[](0));
        _grantRole(ADMIN, _user);
    }

    // Add Contract
    function addContract(string memory _name, string memory _description, string memory _status, int _cid) public {
        require(
            hasRole(ADMIN, msg.sender),
            "Only the admin can add contracts"
        );
        contracts[_cid] = gov_contract(_name, _description, _status, _cid, 0, 0);
    }

    // Fetch Contract
    function fetchContract(int _cid) public view returns (string memory, string memory, string memory, int, int, int) {
        require(
            hasRole(EMPLOYEE, msg.sender) || hasRole(ADMIN, msg.sender),
            "Not Correct Permissions"
        );
        return (
            contracts[_cid].name,
            contracts[_cid].description,
            contracts[_cid].status,
            contracts[_cid].cid,
            contracts[_cid].hoursWorked,
            contracts[_cid].cost
        );
    }

    // Add Hours Worked
    function addHoursWorked(int _contractId, int _hoursWorked) public {
        require(
            hasRole(EMPLOYEE, msg.sender) || hasRole(ADMIN, msg.sender),
            "Not Correct Permissions"
        );
        contracts[_contractId].hoursWorked += _hoursWorked;
        contracts[_contractId].cost += users[msg.sender].hourlyWage * _hoursWorked;
    }
}

