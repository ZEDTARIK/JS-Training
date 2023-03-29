const doublons = (array) => {
    let result= [];
    for (let index = 0; index < array.length; index++) {
        result.push(array[index] * array[index]);
    }
    return result;
}

console.table(doublons([1, 2, 4, 5]));
