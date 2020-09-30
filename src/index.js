
exports.min = function min (array) {
    if(array && array.length) {
        return Math.min.apply(null, array);
    }
        return 0;  
}

exports.max = function max (array) {
    if(array && array.length) {
        return Math.max.apply(null, array);
    } 
        return 0;
}

exports.avg = function avg (array) {
    if(array && array.length) {
        return (array.reduce((a,b)=>a+b,0) / array.length);
    }
  return 0;

}
