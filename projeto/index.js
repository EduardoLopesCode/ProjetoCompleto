console.log("Rodando Projeto")

let tarefas = [];

function adicionarTarefa(tarefa) {
  tarefas.push(tarefa);
  console.log("Tarefa adicionada:", tarefa);
}

function listarTarefas() {
  console.log("Suas tarefas:");
  for (let i = 0; i < tarefas.length; i++) {
    console.log(i + 1, "-", tarefas[i]);
  }
}

// Testando:
adicionarTarefa("Estudar lógica");
adicionarTarefa("Criar projeto no GitHub");
listarTarefas();