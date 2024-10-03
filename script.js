function formatarAltura(input) {
  var altura = input.value.replace(",", "."); // Substitui a vírgula por ponto, se houver

  // Se o usuário digitou um número e ainda não há um ponto, adiciona-o
  if (altura.length === 1 && !altura.includes(".")) {
    input.value = altura + ".";
  } else {
    input.value = altura;
  }
}

function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);

  // Limpa as classes de destaque das categorias
  limparCategorias();

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById("resultado").innerHTML =
      "Por favor, insira valores válidos.";
    return;
  }

  var imc = peso / (altura * altura);
  var categoria = "";

  if (imc < 18.5) {
    categoria = "abaixo-peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "peso-normal";
  } else if (imc >= 25 && imc <= 29.9) {
    categoria = "sobrepeso";
  } else if (imc >= 30) {
    categoria = "obesidade";
  }

  document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(
    2
  )}`;

  // Adiciona a classe 'highlight' na categoria correspondente
  document.getElementById(categoria).classList.add("highlight");
}

function limparCategorias() {
  // Remove a classe de destaque de todas as categorias
  document.getElementById("abaixo-peso").classList.remove("highlight");
  document.getElementById("peso-normal").classList.remove("highlight");
  document.getElementById("sobrepeso").classList.remove("highlight");
  document.getElementById("obesidade").classList.remove("highlight");
}
