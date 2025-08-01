const botao = document.getElementById("botaoMagico");
const lista = document.getElementById("listaEventos");
const tipoTexto = document.getElementById("tipoTexto");

let contador = 0;
const mensagens = [
  "Você clicou no botão!",
  "O JavaScript está te ouvindo...",
  "Interação é tudo!",
  "Isso é o poder do addEventListener 💡"
];

botao.addEventListener("click", () => {
  contador++;

  // 1. Anima o botão com uma "pulsação"
  botao.classList.add("pulso");
  setTimeout(() => botao.classList.remove("pulso"), 300);

  // 2. Adiciona um item à lista
  const item = document.createElement("li");
  item.textContent = `Evento #${contador} registrado.`;
  lista.appendChild(item);

  // 3. Simula digitação automática no texto
  let index = 0;
  tipoTexto.textContent = "";
  const mensagem = mensagens[contador % mensagens.length];
  const interval = setInterval(() => {
    tipoTexto.textContent += mensagem[index];
    index++;
    if (index >= mensagem.length) clearInterval(interval);
  }, 50);

  // 4. Vibração (para mobile)
  if (navigator.vibrate) {
    navigator.vibrate(100);
  }
});
