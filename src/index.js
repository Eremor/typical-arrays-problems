
exports.min = function min (array) {
    return (array == 0 || array == '' || array == undefined) ? 0 : array.sort((x, y) => x - y)[0]
}

exports.max = function max (array) {
    return (array == 0 || array == '' || array == undefined) ? 0 : array.sort((x, y) => y - x)[0]
}

exports.avg = function avg (array) {
    return (array == 0 || array == '' || array == undefined) ? 0 : array.reduce((x, y) => x + y)/array.length
}
