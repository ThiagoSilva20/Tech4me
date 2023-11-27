var presente_num = 19;
var ausente_num = 1;


var presente = "total de presentes " + presente_num ;
var ausente = "total de ausentes " + ausente_num;

var total = presente_num + ausente_num;

var maioria_presente = presente_num > total / 2;
console.log(presente + ", " + ausente + ", " + maioria_presente);
