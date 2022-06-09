// Write your solution in this file!
 const employee = {
     name : `Phillip`,
     streetAdress : `4th street`
 }

 function updateEmployeeWithKeyAndValue (employee, key, value){
    return {... employee, ...{ [key]: value} }
 }

 function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
     employee[key]  = value; //updates

     return employee; //returns
 }

 function deleteFromEmployeeByKey (employee, key) {
     const newEmployee = {...employee}

    delete newEmployee[key]

    return newEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey (employee, key) { 
     delete employee[key]

     return employee

 }