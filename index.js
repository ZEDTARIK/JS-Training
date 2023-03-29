const array = [1, 6, 10, 500, 4];

for (let index = 0; index < array.length; index++) {
    
    if(array[index] === 500)  break; 
    //if(array[index] === 500)  continue; 
    array[index] = array[index]  - 1;
}

console.table(array);
