function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const r = readLine()
    const PI = Math.PI
    
    // Print the area of the circle:
    const area = PI*r**2
    console.log(area)
    // Print the perimeter of the circle:
    const perimeter = 2*PI*r
    console.log(perimeter)
}

main()