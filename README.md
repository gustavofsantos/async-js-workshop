## Tópicos

##### Como o JavaScript funciona (visão super simplificada usando o V8)
- Uma visão geral
- Arquitetura do V8: Ignition, TurboFan, Hot Code Gen
- APIs do Node não são parte do ECMAScript
- Event Loop: libuv, C++, multithread?, SMT, (tokio event loop [deno])

##### Processamento assíncrono em Node com callbacks: módulo crypto
- callback hell

##### Processamento assíncrono em Node com Promises: módulo crypto
- Abstração do tempo
- Estados de uma promise
- then, catch, finally
- Uma vez resolvida, o resultado da Promise nunca muda
- Chain
- Microtask queue

##### Processamento assíncrono em Node com async/await: módulo crypto
- Cadê meu catch?
- Não lidar corretamente com erros: boom!

##### Node.js encontra o paralelismo
- Worker threads

##### Geradores
- Pausando funções
- Geradores assíncronos

##### Iteradores
- [Symbol.iterator]
- [Symbol.asyncIterator]



- Respostas das dúvidas
