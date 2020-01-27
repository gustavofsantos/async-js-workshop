/**
 * Fila de microtarefas
 * slides/microtask.jpg
 */

setTimeout(() => console.log('1'), 0)

Promise
  .resolve()
  .then(() => console.log('2'))

console.log('3')

/**
 * Explicação:
 *
 * A fila de microtarefas tem maior prioridade que a
 * fila de tarefas, assim, promises com callbacks
 * registrados, terão esses callbacks executados
 * com maior prioridade que os callbacks registrados
 * nos demais eventos
 */
