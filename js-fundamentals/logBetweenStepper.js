function logBetweenStepper(min, max, step) {
    let i = min;
    while (i <= max) {
        console.log(i);
        i += step;
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9
