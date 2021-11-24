import Customer from "../models/customer.js"
import Employee from "../models/employee.js"

export const users = []
users.push(new Customer(1, "Engin", "Demiroğ", "Ankara", 36, "123456"))
users.push(new Customer(6, "Beytullah", "Zor", "Ankara", 36, "123456"))
users.push(new Customer(2, "Mustafa", "Sansar", "İstanbul", 21, "654321"))
users.push(new Employee(3, "Cansu", "Değirmen", "İstanbul", 20, 8000))
users.push(new Employee(4, "Mücahit", "Kaya", "Bolu", 23, 17000))
users.push(new Employee(5, "Eren", "Arı", "Diyarbakır", 20, 15000))

//23.05 Dersteyiz