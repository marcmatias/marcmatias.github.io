---
title: "Vimwiki"
date: "2026-04-04"
description: "Sobre meu uso e atalhos preferidos."
tags:
  - Vim
  - Vimwiki
  - Linha de comando
layout: layouts/post.njk
---

# Vimwiki

Vimwiki é uma wiki pessoal para Vim, ótima para tomar notas e organizá-las sem ter que ficar dependendo de interfaces complexas. Tudo roda em linha de comando através do Vim.

Migrar para algo mais simples acabou se tornando um caminho natural para mim depois de ter usado _Notion_ e _Obisidan_ e ter me cansado de ter que ficar lidando com interfaces pesadas, atualizações com coisas que eu não estava interessado em utilizar (como, por exemplo, a forçação de de barra com funcionalidades de IA do _Notion_ de uns tempos para cá) e atalhos/comandos de teclado que não são os que normalmente uso com Vim.

Link de site oficial:

[Vimwiki - A personal wiki for Vim](https://vimwiki.github.io/){target="_blank"}

## Atalhos do Vimwiki

Segue lista dos atalhos que tenho mais utilizado:

- `<leader>` + `ww`
  - Com o Vim aberto, somos levados para a Wiki principal do Vimwiki.
- `<leader>` + `wi`
  - _Diary index_, um index com todos os diários gerados pelo Vimwiki.
- `<leader>` + `w` + `<leader>` + `i`
  - Estando dentro da _Diary index_, gera lista organizada com todos diários encontrados.
- `<leader>` + `w` + `<leader>` + `w`
  - Cria ou abre (se já tiver sido criado) novo diário com o nome do arquivo no formato `YYYY-MM-DD` (ano-mês-dia) e sendo a data atual ao momento em que você fez este comando. Também já coloca este novo arquivo na pasta `diary/` que fica onde definimos a nossa pasta raiz de wiki.
- `<leader>` + `ws`
  - Alterna entre wikis diferentes se temos tivermos mais de uma configurada.
- `<leader>` + `wd`
    - Vimwiki pergunta se queremos deletar o arquivo atual que estamos visualizando, um prompt aparece na base do Vim e podemos responder com _yes_ ou _no_ para esta ação.
- `<leader>` + `wr`
  - Renomeia o arquivo atual que estamos visualizando. Um prompt aparece na base do Vim e podemos responder com _yes_ ou _no_ para esta ação, e após responder positivamente podemos definir um novo nome para o arquivo, o Vimwiki tenta atualizar todos os arquivos em que este arquivo está com _link_ referido.

<br>

`<leader>` é a tecla contrabarra( _backslash_, `\`) pressionada com o Vim aberto e estando no _Normal mode_, caso queira entender mais e/ou mudar a tecla `<leader>`, veja a referência e o link abaixo:

> [...] Vim calls this "prefix" key the "leader". You can set your leader key to whatever you like.

-- [Learn Vimscript the Hard Way](https://learnvimscriptthehardway.stevelosh.com/chapters/06.html){target="_blank"}

## Pesquisa, funcionalidade de filtragem

Estando no Vim, com o Vimwiki aberto, podemos fazer pesquisas com o comando abaixo:

- `:VWS <pesquisa>`

### Comandos durante pesquisa

Durante a pesquisa é possível abrir janela da _location list_ para ver todos os arquivos em que a busca foi encontrada.

Segue lista de comandos após uma busca ter sido feita:

- `:lopen`
  - Abre a lista (_location list_) de resultados encontrados, na lista vemos o caminho do arquivo encontrado junto com a posição em que a pesquisa foi filtrada e com a linha completa em que a palavra ou frase foi encontrada.
- `:lne` ou `:lnext`
  - Vai para a próxima ocorrência.
- `:lp` ou `:lprevious`
  - Volta para a ocorrência anterior.
- `:lclose`
  - Fecha a lista de resultados encontrados que foi aberta com o comando `:lopen`.

## Outros detalhes

Também fiz mais alguns _setups_ específicos para o meu Vimwiki definindo-os através do arquivo `~/.vimrc`. Caso você queira verificar, basta acessar [este link](https://github.com/marcmatias/linux-dot-files/blob/main/.vimrc#L105-L168){target="_blank"} que leva para o meu repositório de _dotfiles_ e destaca exatamente os trechos que definem estas configurações.

## Referências

- [VimWiki Was Always The Correct Choice | Brodie Robertson](https://www.youtube.com/watch?v=Juve_3_84Ko)
- [LearnVimscript the Hard Way - Leaders](https://learnvimscriptthehardway.stevelosh.com/chapters/06.html){target="_blank"}
- [VimWiki: I write my notes in the terminal, like a monster | Veronica Explains](https://www.youtube.com/watch?v=RmEtH5FQs28){target="_blank"}
- [Vimwiki - A personal wiki for Vim](https://vimwiki.github.io/){target="_blank"}
