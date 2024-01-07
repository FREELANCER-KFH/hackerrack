/*
 * Create the function factorial here
 */

const factorial = (n) => {
    let result = n
    for (let i = n-1; i > 1; i --)
        result *= i
    return result
}

// test
console.log(factorial(4)) // 24