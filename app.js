var checkArithmetic = function(arr) {

    var diff = arr[1] - arr[0];

    for (var i=0; i < arr.length - 1; i++) {
        if ((arr[i + 1] - arr[i]) !== diff) {
            return checkGeometric(arr);
        }
    }

    return "Arithmetic"
}