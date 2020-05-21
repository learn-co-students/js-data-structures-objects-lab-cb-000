// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign( {}, driver, {[key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const driver2 = Object.assign( {}, driver) 
  delete driver2[key]
  return driver2
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}