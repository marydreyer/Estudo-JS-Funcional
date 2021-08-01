//Anonymus function
(function(a,b,c){
    return a + b+ c
}) //ela funciona se colocar entre parenteses

//Function Expression
// pode chamar var ou let, const tb
const sum = function (a,b){
    return a + b
}

const result = sum(7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 9))

let x = 3
console.log(x)

x = sum
console.log(x(3,5))