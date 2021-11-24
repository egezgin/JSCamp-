import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
userService.add(user1)
userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))

let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("--------------------------")
userService.load(users)


let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdgdfg");

userService.add(customerToAdd)
console.log(userService.users)
console.log(userService.errors)
console.log(userService.listCustomers())
console.log(userService.getCustomerById(6))
console.log(userService.getCustomersSorted())
userService.add(new Customer(10, "Emrah", "Gezgin", "Ankara", 32, "8888888"))
