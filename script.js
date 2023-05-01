const meuInput = document.getElementById('meu-input');
let game = document.getElementById('ingame')
const substit = document.getElementById('subst')
let substituir;

meuInput.addEventListener('keyup', () => {
  const texto = meuInput.value;
  substit.innerHTML = meuInput.value
  const textoComQuebrasDeLinha = texto.replace(/\[n\]/g, '<br>');
  meuInput.value = textoComQuebrasDeLinha;
  console.log(texto);
  game.innerHTML = textoComQuebrasDeLinha

  substituir = substit.innerHTML
  const textoSubstituido = substituir.replace(/<br>/g, '[n]');
  substit.innerHTML = textoSubstituido + '[n]';
});