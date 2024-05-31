

const squareSum = (array) => {
    if(!array || array.length == 0) {
        return 0;
    }

    let totalSum = 0;

    for(let arrayItem of array) {
        if(typeof arrayItem === 'object') { // if the item is an array 
            totalSum += parseInt(squareSum(arrayItem));
        }else{
            totalSum += parseInt(arrayItem);
        }
    }

    return totalSum;
}

const l = [[[[[[[[[1]],10,10],11]]], 9], 1]];
// console.log(squareSum(l));

// console.log(contains(nestedObject, undefined));
