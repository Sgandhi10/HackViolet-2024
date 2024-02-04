import "Company"

pub fun main(): Company.GovContract? {
    Company.addContract(name: "CryptoGov", description: "A cool Company", status:"Working", cid:5)
    Company.addUser(firstName: "Bob", lastName: "Billy", email:"Bobbilly@gmail.com", hourlyWage:25, username:"BilyBobJoe", password:"Cool")
    Company.addHoursWorked(username:"BilyBobJoe", cid: 5, hours:5)
    return Company.fetchContract(cid: 5)
}
