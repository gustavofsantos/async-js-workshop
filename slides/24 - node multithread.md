## Worker Threads

Worker threads, diferente dos módulos `cluster` e `child_process`
são threads de sistema criadas dentro do processo principal do Node.js,
proporcionando o uso de memória compartilhada e comunicação não bloqueante via
postagem de mensagens.
