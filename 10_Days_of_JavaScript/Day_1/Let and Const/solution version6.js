function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    const r = parseFloat(readLine())
    
    // Print the area of the circle:
    const area = (PI, r) => console.log(PI*r**2)
    area(PI, r)
    // Print the perimeter of the circle:
    const perimeter = (PI, r) => console.log(2*PI*r)
    perimeter(PI, r)
}

main()