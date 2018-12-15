const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
	newDriver = Object.assign({}, {[key]: value});
	return newDriver;
}