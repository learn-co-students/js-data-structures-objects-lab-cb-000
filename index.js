const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
	const newDriver = Object.assign({}, driver, {[key]: value});
	return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
	obj[key] = value;
	return obj;
}


function deleteFromDriverByKey(obj, key) {
	const newDriver = Object.assign({}, obj);
	return delete newDriver[key];
}

function destructivelyDeleteFromDriverByKey(obj, key) {
	return delete obj[key];
}