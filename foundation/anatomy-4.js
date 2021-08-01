// função anonima
(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3); // eu posso invocar os valores pra função anonima logo em seguida
//uso quando preciso garantir um valor mais restrito para um escopo

(function () {
    let x = 300 // esse valor é independente do primeiro valor
    console.log(x)
})();

(() => {
    console.log('arrow #01')
})();

(() => console.log('arrow #02'))();



