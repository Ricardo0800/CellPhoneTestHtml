const screen = document.getElementsByClassName("screen")[0];
const toggleBtn = document.getElementById("button");

let isOn = false; // Estado inicial (desligado)
const text = "Hello, World!"; // O texto que você quer que apareça
const h2 = document.getElementsByClassName("typingEffect")[0]; // Corrigido para pegar o h2
let index = 0;

function typeWriter() {
    if (index < text.length) {
        h2.innerHTML += text.charAt(index); // Adiciona uma letra ao h2
        index++;
        setTimeout(typeWriter, 150); // Controla a velocidade da digitação (150ms por letra)
    } else {
        h2.style.borderRight = "none"; // Remove o "cursor" após o texto completo
    }
}

toggleBtn.addEventListener("click", () => {
    if (isOn) {
        screen.style.backgroundColor = "black"; 
        h2.innerHTML = ""; // Limpa o texto
        index = 0; // Reinicia o índice
    } else {
        screen.style.backgroundColor = "white";
        setTimeout(() => {
            typeWriter(); // Inicia o efeito de digitação após um pequeno atraso
        }, 500); // Atraso de 500ms para dar tempo da tela "ligar"
    }
    isOn = !isOn; // Alterna entre ligado e desligado
});
