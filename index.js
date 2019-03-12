// Write your solution in this file!
const driver = {}
// let key = 'address'
// let value = '11 Broadway'
// driver.name = "sam"

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({[key]: value}, driver);
}



function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  Object.assign(driver, {[key]: value});
  return driver;
}


function deleteFromDriverByKey(driver, key){
  let clone = {...driver};
  return delete clone[key];
}










function destructivelyDeleteFromDriverByKey(driver, key){
 return delete driver[key];
}
