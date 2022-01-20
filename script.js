const entrada = document.getElementById('texto-tarefa'); // captura a entrada do texto
const botao = document.getElementById('criar-tarefa'); // captura o botão que cria a tarefa
const lista = document.getElementById('lista-tarefas'); // captura a ol, que será pai das li criadas
const line = document.getElementsByTagName('li');// captura todas as li criadas
const apagar = document.getElementById('apaga-tudo');// captura o botão que apaga todos os itens
const finalizados = document.getElementById('remover-finalizados');// captura o botão que remove os itens marcados como finalizados
const LiSelecionada = document.querySelector('#remover-selecionado');// captura o botão que remove o item que foi selecionado

botao.addEventListener('click', adiciona);

function adiciona() {
  if (entrada.value === '') {
    alert('preencha sua tarefa');
  } else {
    const linha = lista.appendChild(document.createElement('li'));
    linha.innerText = entrada.value;
    entrada.value = '';
  }
}// adiciona o texto digitado no input e ao clicar no botão cria uma linha e adiciona a entrada como conteúdo da li

lista.addEventListener('click', selecionado);// adiciona o evento escutador no pai das "li", a tag "ul"

function selecionado(select) {
  // if (select.target === lista) return;

  for (let i = 0; i < lista.children.length; i += 1) {
    if (lista.children[i].outerHTML.includes('rgb(128, 128, 128)')) {
      lista.children[i].style.backgroundColor = 'rgb(241, 241, 239)';
    }
  }
  select.target.style.backgroundColor = 'rgb(128, 128, 128)';
} // ao clicar em uma "li", um item das tarefas, ele muda o background desse elemento

lista.addEventListener('dblclick', completo);

function completo(click) {
  click.target.classList.add('completed');
  // click.target.classList.toggle('completed');
}

lista.addEventListener('mousedown', verifica);
// lista.addEventListener('dblclick', descompleto);

function verifica(cliquei) {
  if (cliquei.target.classList.contains('completed')) {
    lista.addEventListener('dblclick', descompleto);
  }
}

function descompleto(click) {
  click.target.classList.remove('completed');
  lista.removeEventListener('dblclick', descompleto);
}

apagar.addEventListener('click', remove);

function remove() {
  for (let i = line.length; i > 0; i -= 1) {
    lista.removeChild(lista.firstChild);
  }
  // lista.innerHTML = ''; innerHTML lê e cria as tags
}

finalizados.addEventListener('click', removeFinalizados);

function removeFinalizados() {
  const full = document.querySelectorAll('.completed');
  for (let i = 0; i < full.length; i += 1) {
    full[i].remove();
  }
}

LiSelecionada.addEventListener('click', removeSelecionado);

function removeSelecionado() {
  for (let i = 0; i < line.length; i += 1) {
    if (line[i].outerHTML.includes('rgb(128, 128, 128)')) {
      line[i].remove();
    }
  }
}
