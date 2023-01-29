---
title: Guia de instalação ArchLinux
description: Guia com os comandos e setups necessários para instalar ArchLinux
date: 2023-01-29
tags:
  - ArchLinux
  - Linux
cover: "/assets/images/covers/Archlinux.png"
alt: Logo do ArchLinux
layout: layouts/post.njk
---

# Guia de instalação

Após iniciar o disco de instalação veremos o console exibindo

```bash
root@archiso ~ #
```

Com isso podemos passar para os primeiros passos organizando o disco em partições para a instalação.

## Particionamentos

Listamos os discos com `fdisk -l`

Selecionamos um disco para particionar com `fdisk /dev/sda`

Utilizando o comando “m” para ir vendo os comandos necessários para gerar as partições defini o particionamento como

- `boot`
- `/`
- `home`
- `swap`

Foi necessário formatar as partições nos formatos necessários para cada tipo definido anteriormente

- Boot EFI
```bash
mkfs.fat -F32 /dev/xxx
```
- `/` e `/home` com
```bash
mkfs.ext4 /dev/xxx
```

- `swap` com
```bash
mkswap /dev/xxx

# definir swap com
swapon /dev/xxx
```

## Ativar WIFI

Para ligar a placa Wifi foi necessário executar comando `rfkill unblock wifi`

Utilizaremos o iwctl para conectarmos a Wifi

```bash
# Escaneamos a rede
station wlan0 scan

# Mandamos capturar as redes escaneadas (assim podemos ver o que foi encontrado)
station wlan0 get-networks

# Agora vamos conectar em uma dessas redes escaneadas
station wlan0 connect "Name of Network/WiFi"

# Após fazermos a conexão podemos sair
exit
```

Agora podemos sincronizar os pacotes do ArchLinux `pacman -Syy`

É recomendável atualizar o mirrorlists com isso teremos os packages ArchLinux sendo baixados dos servidores mais rápidos possíveis em relação a nossa conexão com a rede (sugerido pelo guia do FOSS)

```bash
# Instalação do reflector utilizado para a geração da lista
pacman -S reflector

# Geração de backup do mirrorlist atual caso precisemos retornar após modificações indesejadas
cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak

# Geração de nova lista com reflector
reflector -c "US" -f 12 -l 10 -n 12 --save /etc/pacman.d/mirrorlist
```

## Instalação do ArchLinux

Motamos a partição `/` na pasta `/mnt` com
```bash
mount /dev/xxx /mnt
```

E fazemos o download dos pacotes base do ArchLinux com
```bash
pacstrap /mnt base linux linux-firmware gvim
```

A opção pelo gvim é para termos a copia pra o clipboard do X11. Desse modo vamos poder copiar no vim o colar diretamente em qualquer programa na interface que tivermos rodando e vice-versa.

Seguimos com a configuração de partições, timezone e língua do sistema
```bash
# Devemos também montar outras partições como boot e home na `/mnt`. Geramos o fstab
genfstab -U /mnt >> /mnt/etc/fstab

# Acessamos o sistema instalado para fazer mais configurações
arch-chroot /mnt

# Definimos o horário e fuso da máquina com
timedatectl set-timezone America/Recife

# Descomentamos a linha `en_US.UTF-8` para definir uma língua
vim /etc/locale.gen

# Geramos o locale e aplicamos e exportamos com
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
export LANG=en_US.UTF-8

# Setamos o nome da máquina
`echo avalon > /etc/hostname`
```

Criamos o `/etc/hosts` com
```bash
touch /etc/hosts
```

E adicionamos nesse arquivo o seguinte conteúdo
```bash
127.0.0.1	localhost
::1		localhost
127.0.1.1	substituir_pelo_nome_da_maquina
```

Setamos o password do root com
```bash
passwd
```

## Grub (inicialização)

```bash
grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=ArchLinux
grub-mkconfig -o /boot/grub/grub.cfg
```

## Criar usuário

```bash
# Instalação de sudo para uso de comando sudo no futuro
pacman -S sudo

# Adicionando usuário marcmatias
useradd -m marcmatias

# Geramos uma senha
passwd marcmatias

# Adicionamos o novo usuário aos grupos separados por vírgula
usermod -aG wheel,audio,video,storage marcmatias
```

Editar aquivo `/etc/sudoers` para adicionar o conteúdo abaixo do campo `root ALL=(ALL) ALL`. Desse modo concedemos permissão de root através do comando sudo para este usuário
```bash
marcmatias ALL=(ALL) ALL
```

## Instalação de WM (gerenciador gráfico)

Optei por fazer a instalação do Plasma

```bash
pacman -S xorg networkmanager plasma plasma-wayland-session
```

Vamos deixar ativado por padrão o gerenciador de logins e o network manager assim será
possível acessar o sistema gráfico e utilizar a internet no primeiro acesso

```bash
systemctl enable sddm.service
systemctl enable NetworkManager.service
```

## Desmontando discos e saindo do instalador

```bash
exit
umount -l /mnt
reboot
```
## Referências
- [Archlinux Logo Wallpaper](https://wallpapercrafter.com/104246-archlinux-arch-linux-cyan-white-white-background-arch-linux.html)
- [How to Install Arch Linux [Step by Step Guide] It's FOSS](https://itsfoss.com/install-arch-linux/)
