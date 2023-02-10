
function calc(n) {
    return n + 100;
}

function memo(func) {
    const cache = {};
    return function (n) {
        if (n in cache) {
            return `from cache ${cache[n]}`;
        } else {
            cache[n] = func(n);
            return `from calc ${cache[n]}`;
        }
    }
}

let memoize = memo(calc);

console.time();
console.log(memoize(5));
console.timeEnd();

/* 
from calc 105
default: 10.337ms
*/

console.time();
console.log(memoize(5));
console.timeEnd();

/*
from cache 105   
default: 0.316ms 
*/
