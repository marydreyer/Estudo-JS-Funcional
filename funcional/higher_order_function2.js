//curring
function finalPrice(tax){
    return function(price){
        return price * (1 + tax)
    }
    
}

const nycFinalPrice = finalPrice(0.0875) 
//console.log(finalPrice(0.0875)(25.1))
console.log(nycFinalPrice(25.1))
