// function arrow é sempre anonima

const increment1 = function(n){
    return n +1
}

const increment2 = (n) => {
    return n +1
}

const increment3 = n => {
    return n +1
}

const increment4 = n => n +1 // se eu nao tenho par de chaves a palavra return está implicita


console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(24))

const sum = (a, b) => a + b // mais de um parametro coloca parenteses 

console.log(sum(24,30))