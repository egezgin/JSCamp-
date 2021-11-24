import Customer from "../models/customer.js";
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.users = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(users) {
        users.forEach(user => {
            this.add(user)    
        });
    }

    checkUserAgeValidityForErrors(user)
    {
        if (Number.isNaN(Number.parseInt(+user.age))) {
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
            return true
        }
        return false
    }

    add(user) {        
        if (!this.checkUserAgeValidityForErrors(user))
        {
            this.users.push(user)            
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.users.filter((user) => {
            if (user instanceof Customer)
            {
                return true
            }

            return false
        })
    }

    getCustomerById(id) {
        return this.listCustomers().find(u=>u.id === id)
    }

    getCustomersSorted(){
        return this.listCustomers().sort((customer1,customer2)=>{
            if (customer1.firstName > customer2.firstName){
                return 1
            }
            else if (customer1.firstName === customer2.firstName){
                return 0
            }
            else {
                return -1
            }
        })
    }
}