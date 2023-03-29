var str = 'Hello World';
var array = str.split('');

for (let index = 0; index < str.length; index++) {
    
    if(array[index] === array[index].toUpperCase()) {
        array[index] = array[index].toLowerCase();
    }
}
console.table(array.join(''));


