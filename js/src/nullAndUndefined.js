function isNull(data) {
    return (data === null);
}
function isNotNull(data) {
    return !isNull(data);
}
function isUndefined(data) {
    return typeof data === 'undefined';
}
function isNotUndefined(data) {
    return !isUndefined(data);
}
function isNullOrUndefined(data) {
    return (isNull(data) || isUndefined(data));
}
function isNotNullOrUndefined(data) {
    return !isNullOrUndefined(data);
}