var numeroSecreto = parseInt(Math.random() * 101);
var tentativas = 0;

function chutar() {
  const chutar = parseInt(document.getElementById("valor").value);
  console.log(chutar);
  if (tentativas == 0) {
    resultado.innerHTML =
      "- Você chegou em Firelink Shrine, mas nada das suas Almas.";
  }
  if (tentativas > 0) {
    resultado.innerHTML =
      "- Você pegou o caminho errado até o Cemitério e foi morto por Esqueletos.";
  }
  if (tentativas > 1) {
    resultado.innerHTML =
      "- Você desceu o elevador da Torre, os Fantasmas não tiveram dó...!";
  }
  if (tentativas > 2) {
    resultado.innerHTML =
      "- Você chegou em Undead Parish, mas morreu para as gárgulas e voltou para fogueira.";
  }
  if (tentativas > 3) {
    resultado.innerHTML =
      "- Você tentou subir pelos esgotos, mas infelizmente fracassou, você agora é um vazio vagando em Firelink.";
  }
  tentativas = tentativas + 1;

  if (chutar > numeroSecreto) {
    resultadoDica.innerHTML =
      "- Eu lembro de muita escuridão, um lugar além do alcance dos humanos, eu chutaria um número abaixo de " +
      chutar;
  } else {
    chutar < numeroSecreto;
    resultadoDica.innerHTML =
      "- Sinto que minhas almas estão além de " +
      chutar +
      "... droga, não consigo lembrar!";
  }
  if (tentativas > 4) {
    resultadoDica.innerHTML = "-Você Morreu!";
  }
  if (chutar == numeroSecreto) {
    resultado.innerHTML =
      "- Você conseguiu se lembrar e encontrou suas Almas perdidas! Humanity Restored! ";
  }
  if (chutar == numeroSecreto) {
    resultadoDica.innerHTML =
      "Parabéns! Em caso de dúvidas, jogue Dark Souls! ";
  }
  if (chutar > 100 || chutar < 0) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 100";
  }
}

//reboot
function reboot() {
  const resultado = document.getElementById("resultado");
  numeroSecreto = parseInt(Math.random() * 101);
  resultadoDica.innerHTML =
    "-Você pega o grande Corvo Negro novamente até Firelink Shrine...";
  resultado.innerHTML = "Boa sorte!";
  tentativas = 0;
}
