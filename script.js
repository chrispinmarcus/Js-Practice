function CalculateShippingCost(totalPriceParam){

let shippingCost;


if (totalPriceParam <= 10){
  shippingCost = 5
}else if(totalPriceParam <=20) {
  shippingCost = 3
} else {
  shippingCost = 0
}
console.log(`shipping cost for you is ${shippingCost}`)
console.log(`for total price of ${totalPriceParam}`)
}
let totalPrice =19;
CalculateShippingCost(totalPrice)