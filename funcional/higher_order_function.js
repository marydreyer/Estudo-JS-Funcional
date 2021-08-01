function run(fn) {
    return fn()
}

function sayHello() {
    console.log('Hello!')
    
}

run(sayHello)

run(function(){
    console.log('Run!')
})

const result = run(Math.random)
console.log(result)