var createCounter = function(n) {
    var count = n;
    return function() {
        return count++;
    };
}

let a = createCounter(2);
console.log(a);