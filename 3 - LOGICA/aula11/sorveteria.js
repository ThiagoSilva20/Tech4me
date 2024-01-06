const prompt = require("prompt-sync")();
var arr = ["creme", 12,"tapereba", 1, "napoletano", 2];

var sabor = prompt("digite sabor: ");

if (sabor == arr[0]){
    arr[1] = arr[1] - 1;
    console.log(arr[1]);
}
if (sabor == arr[2]){
    console.log(arr[3]);
}
if (sabor == arr[4]){
    console.log(arr[5]);
}