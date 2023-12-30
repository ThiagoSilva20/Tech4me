var a = 7;
function naoMuda(a){
    a = a + 5;
    console.log("parametro", a);
}

naoMuda();
console.log("variável", a);