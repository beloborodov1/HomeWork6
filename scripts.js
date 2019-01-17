var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    obj = {};
    arr = [];
    arr2 = [];
    values = "";
    num = parseInt(prompt ('number  of random values'));
    min = parseInt(prompt ('Pls specify range characters. min characters:'));
    max = parseInt(prompt ('max characters:'));

// получаем массив со всеми сгенрированными значениями
for (var c = 0; c < num; c ++){
var rand = min + Math.random() * (max + 1 - min);
rand = Math.floor(rand);

        for (var i = 0; i < rand; i++)
        values += possible.charAt(Math.floor(Math.random() * possible.length));

arr.push (values);
var values = ""}

// разбиваем, группируем, сообщаем
for (var c =1 ;min<=max; min++, c++){
    for (i = 0 ; i < arr.length; i++){
        if (arr[i].length === min)
            arr2.push(arr[i]);
    }
console.log(arr2.length + ' words ' + min + ' characters');
obj[c] = arr2;
var arr2=[]}

console.log(obj);