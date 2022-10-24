# DevTools - Part 2 Questions

1. The initial bug was that the two inputs for numbers were considered strings, and the result would be string concatenations of the two strings.
2. Instead of adding two strings num1 and num2, I casted both of them to numbers using the parseInt() function and then added them. This ensured that result got the sum of the two integers instead of the string concatenation. 