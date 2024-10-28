/*const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
   
    mostrarMaisProjetos();

    
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}*/
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    verificarSeTodosProjetosForamExibidos();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function verificarSeTodosProjetosForamExibidos() {
    const aindaExistemProjetosInativos = document.querySelectorAll('.projeto:not(.ativo)').length > 0;
    if (!aindaExistemProjetosInativos) {
        botaoMostrarProjetos.style.display = 'none'; // Esconde o botão
    }
}
const nameToType = "Olá! Sou Francisco harlém"; 
let index = 0;

function typeName() {
    if (index < nameToType.length) {
        document.getElementById("typed-name").innerHTML += nameToType.charAt(index);
        index++;
        setTimeout(typeName, 100); // Velocidade do efeito (milissegundos)
    }
}

// Inicia o efeito quando a página é carregada
window.onload = typeName;





