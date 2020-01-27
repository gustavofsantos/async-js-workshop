## Geradores

- Promises não podem ser pausadas
- Uma vez que uma promise é criada, ela é resolvida o mais rápido possível
- Funções geradoras podem ser pausadas depois de iniciadas
- Uma promise não pode ser cancelada, um gerador pode.
- Geradores nos permitem esperar por valores em funções que não
dependem de promises.
- Podemos criar uma abstração onde diversos contextos podem ser pausados
sem envolver colocar um valor dentro de uma abstração temporal (Promise)
