// Write your solution in this file!
const driver = {}

const updateDriverWithKeyAndValue = (driver, key, value) => {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value
  return driver
}

const deleteFromDriverByKey = (driver, key) => {
  const newDrivers = Object.assign({}, driver)
  delete newDrivers[key]
  return newDrivers
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver
}
