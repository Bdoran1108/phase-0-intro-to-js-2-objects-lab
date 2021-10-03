// Write your solution in this file!

//const employee = {
//name: 'Name',
//streetAddress: 'Address'
//}

let employee = {
name: 'Name',
streetAddress: 'Address'
}

const updateEmployeeWithKeyAndValue = (obj, key, val) => {

let output ={}
output = obj
output[key] = val
return output
}

updateEmployeeWithKeyAndValue(employee,'name','brian')

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, val) => {

obj[key] = val
return obj
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'brian')


//const deleteFromEmployeeByKey = (obj, key, val) => {

//let output ={}
//output = obj
//if 
//output[key] = val
//return output
//}

const deleteFromEmployeeByKey = (obj, key) => {
    let output = {}
    const copy = obj
    const keys = Object.keys(copy)
    for (let i = 0; i < keys.length; i++) {
        console.log("our pointer", keys[i])
        console.log("our key", key)
        if (keys[i] !== key) {
            output[keys[i]] = copy[keys[i]]
        }
    } 
   return output
}

const destructivelyDeleteFromEmployeeByKey = (obj, key) => {
  let output = {}
  const keys = Object.keys(obj);
  const copy = obj;
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== key) {
      output[keys[i]] = copy[keys[i]]
    }
  }
  obj = {...output}
  return obj
};