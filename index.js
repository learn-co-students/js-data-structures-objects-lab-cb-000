// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  const newObj = { ...driver };

  return delete newObj[key];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}
