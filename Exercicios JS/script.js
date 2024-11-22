function exercicio1() {
    const nome = prompt("Digite seu nome:");
    alert(`Bem-vindo(a), ${nome}!`);
  }
  
  function exercicio2() {
    const numero1 = parseInt(prompt("Digite o primeiro número:"));
    const numero2 = parseInt(prompt("Digite o segundo número:"));
    const soma = numero1 + numero2;
    alert(`A soma dos números é: ${soma}`);
  }
  
  function exercicio3() {
    const salario = parseFloat(prompt("Digite o salário do funcionário:"));
    const novoSalario = salario * 1.10;
    alert(`O novo salário com 10% de aumento é: R$${novoSalario.toFixed(2)}`);
  }
  
  function exercicio4() {
    const num1 = parseInt(prompt("Digite o primeiro número:"));
    const num2 = parseInt(prompt("Digite o segundo número:"));
    const num3 = parseInt(prompt("Digite o terceiro número:"));
    const media = (num1 + num2 + num3) / 3;
    alert(`A média dos números é: ${media.toFixed(2)}`);
  }
  
  function exercicio5() {
    const base = parseFloat(prompt("Digite a base do triângulo:"));
    const altura = parseFloat(prompt("Digite a altura do triângulo:"));
    const area = (base * altura) / 2;
    alert(`A área do triângulo é: ${area.toFixed(2)}`);
  }
  
  function exercicio6() {
    const idade = parseInt(prompt("Digite sua idade:"));
    const anosRestantes = 100 - idade;
    alert(`Faltam ${anosRestantes} anos para você completar 100 anos.`);
  }
  
  function exercicio7() {
    const numero = parseFloat(prompt("Digite um número:"));
    const quadrado = numero ** 2;
    alert(`O quadrado do número é: ${quadrado}`);
  }
  
  function exercicio8() {
    const preco = parseFloat(prompt("Digite o preço do produto:"));
    const descontoPercentual = parseFloat(prompt("Digite o percentual de desconto:"));
    const desconto = (preco * descontoPercentual) / 100;
    const precoFinal = preco - desconto;
    alert(`O desconto é: R$${desconto.toFixed(2)}. O preço final é: R$${precoFinal.toFixed(2)}`);
  }
  
  function exercicio9() {
    const dias = parseInt(prompt("Digite a quantidade de dias:"));
    const horas = dias * 24;
    const minutos = horas * 60;
    const segundos = minutos * 60;
    alert(`${dias} dias equivalem a ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);
  }
  
  function exercicio10() {
    const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    const fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F.`);
  }
  
  function exercicio11() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const maior = num1 > num2 ? num1 : num2;
    alert(`O maior número é: ${maior}`);
  }
  
  function exercicio12() {
    const distancia = parseFloat(prompt("Digite a distância percorrida (em km):"));
    const tempo = parseFloat(prompt("Digite o tempo gasto (em horas):"));
    const velocidadeMedia = distancia / tempo;
    alert(`A velocidade média é: ${velocidadeMedia.toFixed(2)} km/h.`);
  }
  