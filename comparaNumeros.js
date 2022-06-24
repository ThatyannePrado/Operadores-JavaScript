function comparaNumeros(num1, num2) {
    var soma = num1 + num2;
    if (num1===num2) {
        var compIgual = "";        
    } else {
        var compIgual = "não";
    }
    if (soma < 10) {
        var comp10 = "menor";        
    } else if (soma === 10){
        var comp10 = "igual"; 
    } else {
        var comp10 = "maior"; 
    }

    if (soma < 20) {
        var comp20 = "menor";        
    } else if (soma === 20){
        var comp20 = "igual"; 
    } else {
        var comp20 = "maior"; 
    }


    console.log("Os números " + num1 + " e "+num2+" " +compIgual+" são iguais. Sua soma é "+soma+",\n que é "+comp10+" que 10 e "+comp20+" que 20.");
}

comparaNumeros(5,5);