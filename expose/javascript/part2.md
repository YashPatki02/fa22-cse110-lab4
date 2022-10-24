# Part 2 Questions

1. ``` 3 ```
   The for-loop runs through the length of the array passed into the function. It iterates over indices 0, 1, 2, and then i gets set to 3, which doesn't match the criteria of [i < prices.length], so the for-loop concludes. So when we print i to the console, we get 3. The var keyword allows us to change and access the i variable with the function scope freely. 
2. ``` 150 ```
   Once we return from the for-loop, we set discountedPrice using the last element in the prices array (300). discountedPrice starts with being set to 50 first when i = 0 (prices[i] = 100), then is 100, and finally 150, which is what gets printed. Again, the var keyword allows us to change and access the element within the function scope freely. 
3. ``` 150 ``` 
   Same as before, the var keyword allows us to change finalPrice as we iterate through the for-loop. When we are on the last element, we get discountedPrice 150, then multiplying and dividing by 100 just gives us the same number 150. 
4. ``` [50, 100, 150] ```
    The function returns an array of all the prices discounted by the discount amount. As we iterate through all the prices in the argument array, we apply the discount to it and save each new price in discountedPrice, pushing that value to the discounted array. Pushing adds the elements to the end, so we add the discounted prices in order and we return that in the end. Using the var keyword allows us to push new elements to it. 
5. ``` ReferenceError: i is not defined at discountPrices (...) ```
    The code returns an error because i is declared using let, and thus cannot be accessed from outside the for-loop block. 
6. ``` ReferenceError: discountedPrice is not defined at discountPrices (...) ```
    Same issue as above, using the let keyword for discountedPrice within the for-loop block prevents us from accessing it outside that particular block.
7. ``` 150 ```
    Since we used let and defined the finalPrice variable outside the for-loop block in the beginning of the function, we don't get any errors when accessing it within the function block. Therefore, we get the same answer as we got when we used the var keyword. 
8. ``` [50, 100, 150] ```
    The function returns an array of all the prices discounted by the discount amount. As we iterate through all the prices in the argument array, we apply the discount to it and save each new price in discountedArray, pushing that value to the discounted array same as when we used the var keyword. Declaring this variable at the beginning of the function block allows us to access and return it at the end. 
9. ``` ReferenceError: i is not defined at discountPrices (...) ```
    The code returns an error because i is declared using let, and thus cannot be accessed from outside the for-loop block, same error as Question 5. 
10. ``` 3 ```
    The code returns the length of the prices array. There is no error because even though we use the const keyword to declare length, we never reassign it before printing it to the console. 
11. ``` [50, 100, 150] ```
    The function returns an array of all the prices discounted by the discount amount. As we iterate through all the prices in the argument array, we apply the discount to it and save each new price in discountedPrice, pushing that value to the discounted array same as when we used the var keyword. Because we declare a new discountedPrice with the const keyword through every iteration, we don't reassign that variable ever, we instead create a new const variable to store discounted price every time. Also, we can add to a const array and change the elements inside, but we cannot reference a new array when declaring it with the const keyword, thus we don't get any errors. 
12. 
``` 
A. console.log(student.name);
B. console.log(student['Grad Year']);
C. student.greeting();
D. console.log(student['Favorite Teacher'].name);
E. console.log(student.courseLoad[0]); 
```
13. 
```
    A. 32, '32' since integers map to their exact string representation.
    B. 1, since both map to their exact integer representation. 
    C. 3, since null maps to 0.
    D. 3null, since both map to their string representation.
    E. 4, since true maps to 1 and it is performing integer addition. 
    F. 0, since both false and null get casted to 0 as integers.
    G. 3undefined, since both map to their string representation.
    H. NaN, since both values get mapped to their integer representations. 
```
14. 
```
    A. true, '2' gets mapped to its integer representation.
    B. false, we compare the first characters of both strings and return false since '1' < '2'. 
    C. true, the double-equals casts the '2' to its integer representation and returns true.
    D. false, the triple-equals doesn't cast '2' and thus returns false when comparing an integer and string.
    E. false, the true gets mapped to 1 when compared with an integer, thus returns false. 
    F. true, the 'Boolean(2)' gets casted to true, thus returning true.
```
15.  ``` == ``` compares two variables while ignoring the variable datatype. ``` === ``` is also used to compare two variables, but this checks for datatypes as well.

---

17.   ``` [ 2, 4, 6 ] ``` We call modifyArray using the array and a callback function. As we iterate through the array, we call the callback function passing in each number from the array. Then, we push that madified number into our newArr and return that array at the end. 

---
19. ``` 
    1 
    4
    3
    2 
    ```