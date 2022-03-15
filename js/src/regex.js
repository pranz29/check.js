function isValidRegex(data) {
    if(isNullOrUndefined(data)) return false;
    let isValid = true;
    try {
        new RegExp(data);
    } catch(e) {
        isValid = false;
    }
    return isValid;
}
function isNotValidRegex(data) {
    return !isValidRegex(data);
}
function testDataAgainstRegex(data, regex) {
    if(isNotValidRegex(regex)) return false;
    if(isNullOrUndefined(data)) return false;
    const regExp = new RegExp(regex);
    return regExp.test(data);
}