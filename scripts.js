var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var obj = {};
    arr = [];
    arr2 = [];
    arr3 = [];
var values = "";
var quantity =[];

var num = prompt ('number  of random values');
var min = prompt ('Pls specify range characters. min characters:');
var max = prompt ('max characters:');
num = parseInt(num);
min = parseInt(min);
max = parseInt(max);

for (var c = 0; c < num; c ++){

var rand = min + Math.random() * (max + 1 - min);
rand = Math.floor(rand);
quantity.push(rand);

            for (var i = 0; i < rand; i++)
            values += possible.charAt(Math.floor(Math.random() * possible.length));

arr.push (values);
var values = "";
}
// Группируем
for (var c =1 ;min<=max; min++, c++){
    for (i = 0 ; i < arr.length; i++){
    if (arr[i].length === min)
    arr3.push(arr[i]);
    }
console.log(arr3.length + ' words ' + min + ' characters');
obj[c] = arr3;
var arr3=[];}

console.log(obj);