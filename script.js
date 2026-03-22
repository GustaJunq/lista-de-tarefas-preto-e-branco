
const tarefaInput = document.getElementById('tarefa');
const adicionarBtn = document.getElementById('adicionar');
const lista = document.getElementById('lista');
const salvarBtn = document.getElementById('salvar');

let tarefas = [];

adicionarBtn.addEventListener('click', () => {
    const tarefa = tarefaInput.value.trim();
    if (tarefa) {
        tarefas.push({ tarefa, feito: false });
        atualizarLista();
        tarefaInput.value = '';
    }
});

salvarBtn.addEventListener('click', () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
});

lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = Array.prototype.indexOf.call(lista.children, e.target);
        tarefas[index].feito = !tarefas[index].feito;
        atualizarLista();
    }
});

function atualizarLista() {
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa.tarefa;
        if (tarefa.feito) {
            li.classList.add('riscado');
        }
        lista.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const storedTarefas = localStorage.getItem('tarefas');
    if (storedTarefas) {
        tarefas = JSON.parse(storedTarefas);
        atualizarLista();
    }
});
