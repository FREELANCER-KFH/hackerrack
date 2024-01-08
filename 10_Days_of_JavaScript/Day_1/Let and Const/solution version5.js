function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const r = readLine()
    const PI = Math.PI
    
    // Print the area of the circle:
    function area (PI, r){
        return PI*r**2
    }
    console.log(area(PI, r))
    // Print the perimeter of the circle:
    function perimeter(PI, r){
        return 2*PI*r
    }
    console.log(perimeter(PI, r))
}

main()