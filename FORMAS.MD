Formas de lidar com bancos de dados no back-end


   driver nativo, query builder, ORM 


driver nativo
   *! Sqlite3 - nao oferece nenhum tipo de abstracao

Query builder
   *! Knex - escreve com JavaScript, ele depois builda para o driver nativo. Ele ajuda a ficar mais facil em escrever o codigo.

ORM
   *! ORM - nivel maximo de abstracao, usa uma sintaxe de JS, e cada linha de return, vai ser um objeto da classe.

<--!-->
   *Quando vc usa o Query Builder ou ORM, vc consegue alterar o banco de dados da applicacao ele integra de boas.