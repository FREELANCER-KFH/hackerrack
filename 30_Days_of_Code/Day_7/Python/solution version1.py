#!/bin/python3

n = int(input().strip())

arr = list(map(int, input().rstrip().split()))

result = ''
new_arr = reversed(arr)

for i in new_arr:
    result += str(i) + " "
        
print(result)
