function calcula_imc() {
    let display = document.getElementById('display')
    
    let altura = document.imcForm.altura.value;
    let peso = document.imcForm.peso.value;

    let quadrado = (altura * altura);

    let calculo = (peso / quadrado).toFixed(1);

    if (calculo < 10) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Desnutrição Grau V'
    } else if (calculo > 10 && calculo < 12.9) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Desnutrição Grau IV'
    } else if (calculo >= 13 && calculo < 15.9) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Desnutrição Grau III'
    } else if (calculo >= 16 && calculo < 16.9) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Desnutrição Grau II'
    } else if (calculo >= 17 && calculo < 18.4) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Desnutrição Grau I'
    } else if (calculo >= 18.5 && calculo < 24.9) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Normal'
    } else if (calculo >= 25 && calculo < 29.9) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Pré-obesidade'
    } else if (calculo >= 30 && calculo < 34.5) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Obesidade Grau I'
    } else if (calculo >= 35 && calculo < 39.9) {
        display.innerHTML = 'Seu IMC é: ' + calculo + ';<br> Obesidade Grau II'
    } else if (calculo >= 40) {
        display.innerHTML = 'Seu IMC é: ' + calculo + '<br> Obesidade Grau III'
    } else {
        display.innerHTML = 'Peso ou Altura Inválido'
    }
}
 
