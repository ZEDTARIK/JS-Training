function LettreCApitalize(str)  {
    var array = str.split(" ");
    for (let index = 0; index < array.length; index++)  {
        array[index] = array[index].substr(0, 1).toUpperCase() + array[index].substr(1);
    }

    return array.join(" ");
}

let str = LettreCApitalize("zouhair ettarak");
console.log(str);

