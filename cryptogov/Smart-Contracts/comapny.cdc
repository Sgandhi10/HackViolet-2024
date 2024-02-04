// File: Company.cdc

// Contract definition
pub contract Company {

    // User structure
    pub struct User {
        pub let firstName: String
        pub let lastName: String
        pub let email: String
        pub let hourlyWage: Int
        pub var contracts: [Int]
        priv let username: String
        priv let password: String

        init(firstName: String, lastName: String, email: String, hourlyWage: Int, contracts: [Int], username: String, password: String){
            self.firstName = firstName
            self.lastName = lastName
            self.email = email
            self.hourlyWage = hourlyWage
            self.contracts = contracts
            self.username = username
            self.password = password
        }

    }

    // Govt structure
    pub struct GovContract {
        pub let name: String
        pub let description: String
        pub let status: String
        pub let cid: Int
        pub var hoursWorked: Int
        pub var cost: Int

        init(name: String, description: String, status: String, cid: Int, hoursWorked: Int, cost: Int) {
            self.name = name
            self.description = description
            self.status = status
            self.cid = cid
            self.hoursWorked = hoursWorked
            self.cost = cost
        }

        pub fun addHoursWorked(hours: Int) {
            self.hoursWorked = self.hoursWorked + hours
            self.cost = self.hoursWorked * 100
        }
    }

    // Mapping for users
    pub var users: {String : User}

    // Maping for contracts
    pub var govContracts: {Int : GovContract}

    // Initialize the users mapping
    init() {
        self.users = {}
        self.govContracts = {}
    }

    pub fun addUser(firstName: String, lastName: String, email:String, hourlyWage:Int, username:String, password:String){
        self.users[username] = User(firstName:firstName, lastName:lastName, email:email, hourlyWage:hourlyWage, contracts:[] , username:username, password:password) 
    }

    pub fun addContract(name:String, description:String, status:String, cid:Int){
        self.govContracts[cid] = GovContract(name:name, description:description, status:status, cid:cid, hoursWorked:0, cost:0)
    }

    // Fetch Contract
    pub fun fetchContract(cid: Int): GovContract {
        return self.govContracts[cid]!
    }

    // Add hours worked and total cost
    pub fun addHoursWorked(cid: Int, hours: Int){
        if let c = self.govContracts[cid] {
            c.addHoursWorked(hours: hours)
        }
    }
}
