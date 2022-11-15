---
title: "Tema e personalizações para bash"
date: "2022-11-13"
description: "Tema que utilizo no bash, linha de comando, para facilitar uso e interpretação de interações com sistema."
tags:
  - Linux
  - Programação
  - Bash
  - Linha de comando
cover: "/assets/images/covers/line-command.jpg"
alt: Encontro de cantos da parede de um quarto
layout: layouts/post.njk
---

## Bash

**Resultado:** &nbsp; [Ver imagem do resultado](#resultado)\
**TLDR:** &nbsp; [Por a mão na massa, configurar](#configuracao)

> GNU Bash ou simplesmente Bash é um interpretador de comandos, um entre os
diversos tradutores entre o usuário e o sistema operacional conhecidos como shell.
>
-- [Wikipedia: Bash](https://pt.wikipedia.org/wiki/Bash){target="_blank"}

Na utilização do Linux em geral é bem comum termos que utilizar o bash para fazer
instalação ou manutenção de algum tipo no sistema. Mesmo para usuários(as) com
uso mais focado em aplicativos com interface gráfica.

Em sua versão padrão/default no
[ArchLinux](https://archlinux.org/){target="_blank"} que é o sistema
operacional que costumo mais utilizar esse é o modo como se apresenta:

![Bash padrão Archlinux](/assets/images/content/bashtheme/bash-default-archlinux.png)

Na imagem acima vemos em ordem respectiva

- Usuário: ***marcmatias***
- Nome da máquina: ***avalon***
- Símbolo diretório home: ***~***
  - Que refere a pasta /home/nome-do-usuário-logado

Como podemos ver não tem cores sendo aplicadas nas letras e estão todas envoltas
em colchetes. Isso é o que vamos mudar com as personalizações a seguir visando tornar
esse texto mais interessante e fácil de interpretar.

## Configuração

Vamos adicionar o código abaixo no arquivo *~/.bashrc*

```bash
git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)\ /'
}

PS1='\[\e[1;34m\]\W\[\e[0m\]\[\e[1;33m\] $(git_branch)\[\e[1;30m\]\$\[\e[0m\] '
```

Para melhor compreensão do que foi digitado acima:

- **`PS1`** significa: Prompt String 1 é um dos prompts disponíveis no Linux
- **`\W`** faz com que apenas o nome da pasta atual seja exibido
- `$(git_brach)` exibe o resultado da função de mesmo nome logo acima
  - Essa função exibe o nome da branch atual se estivermos em uma pasta de um repositório
- **`$`** faz com que esse símbolo seja exibido ao final da linha do **`PS1`**
- Demais elementos são configurações de cores e tipos de fonte

Abaixo, uma lista de cores que podemos utilizar com fontes Bold e Regulares

```bash
txtblk='\e[0;30m' # Black - Regular
txtred='\e[0;31m' # Red
txtgrn='\e[0;32m' # Green
txtylw='\e[0;33m' # Yellow
txtblu='\e[0;34m' # Blue
txtpur='\e[0;35m' # Purple
txtcyn='\e[0;36m' # Cyan
txtwht='\e[0;37m' # White
bldblk='\e[1;30m' # Black - Bold
bldred='\e[1;31m' # Red
bldgrn='\e[1;32m' # Green
bldylw='\e[1;33m' # Yellow
bldblu='\e[1;34m' # Blue
bldpur='\e[1;35m' # Purple
bldcyn='\e[1;36m' # Cyan
bldwht='\e[1;37m' # White
```

-- [Change linux shell prompt with different colors](https://linoxide.com/change-linux-shell-prompt-with-different-colors/){target="_blank"}

## Resultado

Agora vamos ver o resultado obtido. Acessei a pasta de um projeto para que
possamos ver além do nome da pasta o nome da branch atual

![Bash padrão Archlinux 2](/assets/images/content/bashtheme/bash-default-archlinux-2.png)

Deixei apenas o nome da pasta e do branch atual (quando estamos em uma
pasta de projeto git) fiquem sendo exibidos nas cores azul (para pastas) e
amarelo (para repositórios).

Costumo utilizar os comandos

- `pwd` para ver qual o caminho completo para a pasta em que estou
- `whoami` para ver qual o usuário atual que estou logado

Por isso opto por só exibir o que é essencial na linha de comando deixando mais
espaço em tela para escrita e retorno de resultados dos comandos e programas executados.

Meu arquivo `.bashrc` completo pode ser encontrado no repositório [dot-files](https://github.com/marcmatias/linux-dot-files){target="_blank"}
com outras configurações de outros aplicativos que costumo utilizar.
