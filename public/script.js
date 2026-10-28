const API = '/produtos';

const formulario = document.getElementById('formulario');
const camponome = document.getElementById('nome');
const campopreco = document.getElementById('preco');
const tituloPorm = document.getElementById('titulo-form');
const botaosalvar = document.getElementById('botao-salvar');
const botaocancelar = document.getElementById('botao-cancelar');
const mensagem = document.getElementById('mensagem');
const lista = document.getElementById('lista');

let ideEmdicao = null;

function mostrarmensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.classname = tipo;
}

function formatarpreco(valor) {
    return valor.toLocalestring ('pt-BR', { style: 'currency', currency: 'BRL'});  
}

function criarItem(produto) {
 const info = document.createElement('li');
 const nome = document.createElement('strong');
 nome.textContent = produto.nome;
 const preco = document.createElement('div');
 preco.className = 'preco';
 preco.textContent = formatarpreco(produto.preco);
 info.append(nome, preco);

 const botaoapagar = document.createElement('button');
 botaoeditar.textContent = 'editar';
 botaoeditar.classname =  'editar';
 botaoeditar.addEventListener('click', () => iniciaredicao(produto));

 const botaoapagar = document.createElement('button');
 botaoapagar.textContent = 'apagar';
 botatoapagar.className = 'apagar';
 botatoapagar.addEventListener('click', () => apagarproduto(produto));

const botoes = document.createElement('div');
botoes.classname = 'botoes';
botoes.append(botaoeditar, botaoapagar);

 item.append(info, bototes);
 return item;
}

async function carregarprodutos() {
    lista.textContent = ' carregando...';

    try{
     const resposta = await fetch(API);
     const produtos = await resposta.json();

     lista.textContent = '';
     if (produtos.legth === 0) {
        lista.textContent = 'nenhum produto cadastrado.';
        return;
     }
     produtos.forEach(produto => lista.append(criarItem(produto)));
    } catch{
     lista.textContent = 'nao foi possivel carregar os produtos.';
    }
}