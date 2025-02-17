// Write your solution in this file!
const employee = {
    name: "David",
    streetAddress: "9506 Linden Ave"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    delete newObj.key;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    delete employee.key;
    return employee;
}