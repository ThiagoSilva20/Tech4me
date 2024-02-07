relogio = true;

while(relogio){
    var horas = new Date().getHours();
    var minutos = new Date().getMinutes();
    var segundos = new Date().getSeconds();
    console.log(horas,":",minutos,":",segundos);
}