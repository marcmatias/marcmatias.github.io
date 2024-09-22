---
title: Como atualizar fork com comando rebase
description: Guia com os comandos necessários para atualizar o fork com comando rebase
date: 2021-04-03
tags:
  - Git
  - Linha de comando
cover: "/assets/images/covers/three.jpg"
alt: Árvore com muitos galhos
layout: layouts/post.njk
---
_Guia com os comandos necessários para atualizar o fork com comando rebase._

1. Set o upstream caso já não o tenha setado

```bash
git remote add upstream https://github.com/original-repo/goes-here.git
```

2. Pegue todas as modificações e branches do upstream

```bash
git fetch upstream
```

3. Com rebase reescrevemos a nossa master com o que foi baixado no passo anterior

```bash
git rebase upstream/master
```

4. Agora é _**pushar**_ as mudanças do clone local para o repositório fork no Git

```bash
git push origin master
```

5. Na página do repositório fork no github será possível ver a informação de que
agora seu estado é de _even (in sync)_, ou seja, sincronizado com o
repositório de origem.

## Fontes

- [https://medium.com/@topspinj/how-to-git-rebase-into-a-forked-repo-c9f05e821c8a](https://medium.com/@topspinj/how-to-git-rebase-into-a-forked-repo-c9f05e821c8a){target="_blank"}
- [https://timonweb.com/misc/how-to-update-a-forked-repo-from-an-upstream-with-git-rebase-or-merge/](https://timonweb.com/misc/how-to-update-a-forked-repo-from-an-upstream-with-git-rebase-or-merge/){target="_blank"}

_Photo by Felix Mittermeier from Pexels_

