const imagem = document.getElementById("imagem");
const titulo = document.getElementById("titulo");

onload = () => {
    imagem.src = "janelafechada.png";
    titulo.innerHTML = "Janela Fechada";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "janelaaberta.png";
    titulo.innerHTML = "Janela Aberta";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "janelafechada.png";
    titulo.innerHTML = "Janela Fechada";
});

imagem.addEventListener("click", () => {
    imagem.src = "janelaquebra.png";
    titulo.innerHTML = "Janela Quebrada";
});