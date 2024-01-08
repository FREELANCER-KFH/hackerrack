function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const r = readLine()
    const PI = Math.PI
    
    // Print the area of the circle:
    function area (PI, r){
        console.log(PI*r**2)
    }
    area(PI, r)
    // Print the perimeter of the circle:
    function perimeter(PI, r){
        console.log(2*PI*r)
    }
    perimeter(PI, r)
}

main()