const { resolve } = require("path");
const employeeDataIn = {
    employee_1:{
        empid: "101",
        empname:"Vikram",
        empexperience: "2",
        empsalary: "10000",
        empdepartment: "IT"
    },
    employee_2:{
        empid: "102",
        empname:"Surya",
        empexperience: "3",
        empsalary: "20000",
        empdepartment: "IT"
    },
    employee_3:{
        empid: "103",
        empname:"Kamal",
        empexperience: "5",
        empsalary: "30000",
        empdepartment: "Finance"
    },
    employee_4:{
        empid: "104",
        empname:"Dhanush",
        empexperience: "2",
        empsalary: "15000",
        empdepartment: "Finance"
    },
    employee_5:{
        empid: "105",
        empname:"Surya",
        empexperience: "3",
        empsalary: "20000",
        empdepartment: "HR"
    },
    employee_6:{
        empid: "106",
        empname:"Kamal",
        empexperience: "5",
        empsalary: "30000",
        empdepartment: "HR"
    },
}
let employeeDataOut = []
function dataCategorizer(data, key){
   
    return new Promise((resolve,reject)=>{

    for(const emp in data)
       
        if (data[emp][key]===categoryValue)
        {
            

            employeeDataOut.push(emp,data[emp])
            
         
    }
    if(employeeDataOut.length>=1){
        
            resolve(employeeDataOut)
    }
        
        else
        {
        
            reject("Data not found")
        }
    
   
})
}

const categoryKey = 'empexperience'
const categoryValue = '5'
dataCategorizer(employeeDataIn, categoryKey)
.then((empp=>{
    console.log(empp)

}))
.catch((emppp=>{
    console.log(emppp)
}))
