/* 
    Objetivo 01 - Clicar no botao 'mostrar mais' e aparecer mais projetos
        1.1 - Pegar o botao do HTML e guardar no JS
        1.2 - Identificar quando o usuario clicar no botao
        1.3 - Fazer uma função para mudar o status dos projetos escondidos para mostra-los
        1.4 - Fazer com que o botao 'mostrar mais' mude para 'mudar menos'



    Objeto 02 - Clicar no botao 'mostrar menos' e esconder parte dos projetos
*/

//1.1 - Pegar o botao do HTML e guardar no JS
const btn = document.querySelector('.btn-mostrar-projetos');

//1.2 - Identificar quando o usuario clicar no botao

btn.addEventListener('click', () => {
    //1.3 - Fazer uma função para mudar o status dos projetos escondidos para mostra-los
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    //1.4 - Fazer com que o botao 'mostrar mais' mude para 'mudar menos'
    btn.classList.add('remover');
});


