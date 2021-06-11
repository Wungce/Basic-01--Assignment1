var orderTotal=0;

function collectOrder(numOrdered) {

if (numOrdered>0){

alert ("You ordered " + orderTotal);

orderTotal = numOrdered * 5;

}

 return orderTotal;

}


var total = collectOrder(5); 

console.log(total);


