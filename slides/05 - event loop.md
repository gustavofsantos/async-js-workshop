## Event Loop

- Central de despacho de ações.
- Espera por novos eventos e destina a execução
 desses eventos ao local adequado
 (Runtime, Browser, Node.js)
 
##### Fila de tarefas

- O runtime do JavaScript usa uma fila de
 tarefas que precisam ser executadas e o
 event loop consome dessa fila, os elementos
 que estão há mais tempo esperando para
 serem executados

```js
setTimeout(() => console.log('1'), 0)
//         ^-- Mensagem a ser adicionada na fila

console.log(2)
```

O que é executado primeiro?
