document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const numero = document.getElementById("number").value.trim();

  // Validação básica
  if (!nome || !email || !numero) {
    mostrarErro("Preencha todos os campos antes de continuar seu burro do caramba.");
    return;
  }

  if (!validarEmail(email)) {
    mostrarErro("Pelo amor de cristo, DIGITE O EMAIL DE FORMA CORRETA, e se não sabe, POIS APRENDA!.");
    return;
  }

  if (!validarTelefone(numero)) {
    mostrarErro("Por favor, insira um número de WhatsApp válido (mínimo 10 dígitos).");
    return;
  }

  
  const numeroEmpresa = "5500000000000";
  const mensagem = encodeURIComponent(
    `Olá! Me chamo *${nome}*.\nMeu e-mail é: ${email}\nMeu WhatsApp: ${numero}`
  );

  const urlWhatsApp = `https://wa.me/${numeroEmpresa}?text=${mensagem}`;

 
  const btn = document.querySelector("button");
  btn.textContent = "Redirecionando...";
  btn.disabled = true;

  setTimeout(() => {
    window.open(urlWhatsApp, "_blank");
    btn.textContent = "Ir para o WhatsApp";
    btn.disabled = false;
  }, 800);
});

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarTelefone(numero) {
  const apenasDigitos = numero.replace(/\D/g, "");
  return apenasDigitos.length >= 10;
}

function mostrarErro(mensagem) {
  // Remove erro anterior se existir
  const erroAnterior = document.querySelector(".erro-msg");
  if (erroAnterior) erroAnterior.remove();

  const erro = document.createElement("p");
  erro.className = "erro-msg";
  erro.textContent = mensagem;
  erro.style.cssText = `
    color: #e53e3e;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    text-align: center;
    animation: fadeIn 0.3s ease;
  `;

  const btn = document.querySelector("button");
  btn.parentElement.insertAdjacentElement("beforebegin", erro);

  
  setTimeout(() => erro.remove(), 4000);
}