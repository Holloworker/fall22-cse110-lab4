***Q1***
3 will be printed since var defines variable i with function grope and for loop iterates 3 times
so value of i is 3.

***Q2***
150 will be printed since var defines variable discountedPrice with function grope and after the for loop the 
value of discountedPrice is 150.

***Q3***
150 will be printed since var defines variable finalPrice with function grope and after the for loop the 
value of finalPrice is 150.

***Q4***
The function will return a list [50, 100, 150] since the for loop iterates 3 times and each time 
the corresponding price will be pushed to the list.

***Q5***
Error, because let declares variable with block scope. The variable i cannot be printed out of the forloop block.

***Q6***
Error, because let declares variable with block scope. The variable discountedPrice cannot be printed out of the forloop block.

***Q7***
150 will be printed since let defines variable finalPrice with block grope and the console.log is in the same block with finalPrice

***Q8***
The function will return a list [50, 100, 150] since the for loop iterates 3 times and each time 
the corresponding price will be pushed to the list. Besides, we use let to define discounted and return is in the same block.

***Q9***
Error, because let declares variable with block scope. The variable i cannot be printed out of the forloop block.

***Q10***
3 will be printed since the length of the prices list is 3.

***Q11***
The function will return a list [50, 100, 150] since the for loop iterates 3 times and each time 
the corresponding price will be pushed to the list. Besides, we do not reassign the discount list.

***Q12***
A. student.name
B. student["Grad Year"]
C. student.greeting()
D. student["Favourite Teacher"].name
E. student.courseLoad[0]

***Q13***
A. 32, since integers map to their stirng representation
B. 1, since '3' maps to integer
C. 3, since null==0 here
D. 3null, since null maps to string represenatation 
E. 4, since true maps to 1
F. 0, since false and null both map to 0 here
G. 3undefined, since undefined maps to string representation 
H. NaN, since '3' and undefined are not number then we will get not a number

***Q14***
A. true, since '2' maps to number 2
B. true, since '2' and '12' map to number 
C. true, since '2' maps to nunber 2
D. false, since '===' checks the equality without type conversion.
E. false, since true maps to 1
F. true, since Boolean(2) maps 2 to true and '===' checks the equality without type conversion 

***Q15***
== operator compares the value of two variables and will do type conversion automatically, while === operator checks
the equality without type conversion

***Q17***
First, the for loop will iterate 3 times since the input array length is 3. Then in the for loop, doSomething function will be 
called. In doSomething function, each input will be multiplied by 2 so 2,4 and 6 will be pushed to newArr in function modifyArrary. Then the return value will be [2,4,6]

***Q19***
The output is 1 4 3 2