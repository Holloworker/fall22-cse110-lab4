
function dis(prices, discount){
    const discounted = [];
    const length = prices.length;
    
    for (let i = 0; i < length; i++){
        const disc = prices[i] * (1-discount);
        discounted.push(disc);
    }
    console.log(discounted);

     return discounted;
}
function P(){
    console.log(1);
    setTimeout(function() {console.log(2);}, 1000);
    setTimeout(function() {console.log(3);}, 0);
    console.log(4);
}

P();