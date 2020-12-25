---
title: Installing Arch Linux
description: 'Step by step walkthrough on how to set up and install Arch Linux to your PC or laptop. This quick guide is just a very quick overhaul of how to get Arch Linux with a KDE Plasma desktop up and running with minimal applications. This guide is more intended for web developers'
snippet: Installing and setting up Arch Linux can be difficult but it doesn't have to be.
---

## `Quick Arch Linux Install Guide`

---

*This **`quick guide`** is just a very quick overhaul of how to get `Arch Linux with a KDE Plasma` desktop up and running with minimal applications. This guide is more intended for web developers. 

*Note: I have done this method a few times and have had no issues following this process. This guide is not an overly explained and in depth guide. This is just some information I have gathered from various sources and pieced together to get working for myself, to hopefully help save someone else some time.*

``` shell
                   -`                       quelchlax@arch 
                  .o+`                      -------------- 
                 `ooo/                      OS: Arch Linux x86_64 
                `+oooo:                     Host: 81SX Legion Y540-15IRH 
               `+oooooo:                    Kernel: 5.8.8-arch1-1 
             `/:-:++oooo+:                  Packages: 1207 (pacman), 14 (flatp 
            `/++++/+++++++:                 Shell: bash 5.0.18 
           `/++++++++++++++:                Resolution: 1920x1080, 1920x1080 
          `/+++ooooooooooooo/`              DE: Plasma 5.19.5 
         ./ooosssso++osssssso+`             WM: KWin 
        .oossssso-````/ossssss+`            WM Theme: Breeze 
       -osssssso.      :ssssssso.           Theme: Breeze Dark [Plasma], Breez 
      :osssssss/        osssso+++.          Icons: Papirus [Plasma], Papirus [ 
     /ossssssss/        +ssssooo/-          Terminal: konsole 
   `/ossssso+/:-        -:/+osssso+-        CPU: Intel i7-9750H (12) @ 4.500GH 
  `+sso+:-`                 `.-/+oso:       GPU: NVIDIA GeForce GTX 1660 Ti Mo 
 `++:.                           `-/+/      Memory: 3520MiB / 15927MiB 
 .`                                 `/
                                                                 
```

### `Warning`
The method discussed here wipes out existing operating system(s) from your computer and install Arch Linux on it. So if you are going to follow this tutorial, make sure that you have backed up your files or else you’ll lose all of it. I recommend trying this inside of a virtual machine, or with a hard drive you plan on using for Linux. You have been warned.

---

### `Requirements for Arch Linux Install`
According to Arch Linux the minimum requirements are:
- A x86_64 (i.e. 64 bit) compatible machine
- Minimum 512 MB of RAM (recommended 2 GB)
- At least 2 GB of free disk space (recommended 20 GB for basic usage with a desktop environment)
- An active internet connection
- A USB drive with minimum 2 GB of storage capacity
- Familiarity with Linux command line
- USB Connection to the internet. This Guide does not use WIFI

---

### `Steps:`
1. Download arch linux iso from https://www.archlinux.org/download/
2. Create a live USB of Arch Linux -- Use Etcher (https://www.balena.io/etcher/) or Rufus (https://rufus.ie/)
3. Boot from the live USB. (Google how to do this with your current machine, will have to change a few things with in your BIOS to boot from the USB with Arch installed)
4. When your booted into Arch follow steps below

---

#### `Partition the disks`
**To check lists of disks use command `fdisk-l` should list various harddrives on the current machine such as `/dev/sda` or `/dev/nvme0n1`**

First, select the disk you are going to format and partition:
in this example I will be using a **nvme0n1**.

- `fdisk /dev/nvme0n1`
- To fully delete each partition in the current harddrive type in `d` then delete existing partions on this current drive
- Then we will create a new partition, type in `n`
- Type in `1`, select default (`enter`) on first sector, and last sector type `+512M`
- Then type `t` and then type `1` to make this partition EFI
- Now we need to create a root partition
- type `n` then `2` and hit `enter` for the rest to make a root partition, can make a custom size when prompt if you wish. In my case I made it the rest of the drives space

---

#### `Creating the filesystem`
So we have two disk partitions. The first one is an EFI. So we will create a FAT32 filesystem onto it with the mkfs commands

- `mkfs.fat -F32 /dev/nvme0n1p1`

Now create an Ext4 filesystem on the root partition:

- `mkfs.ext4 /dev/nvme0n1p2`

---

#### `Select an appropriate mirror`

- `pacman -Syy`

*This is not really needed but can be helpful with download speeds*
- `pacman -S reflector`

- `cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak`

- `reflector -c "US" -f 12 -l 10 -n 12 --save /etc/pacman.d/mirrorlist`

All good to go now.

---

#### `Install Arch Linux`

- `mount /dev/nvme0n1p2 /mnt`

- `pacstrap /mnt base linux linux-firmware`

---

#### `Configure the installed Arch system`

- `genfstab -U /mnt >> /mnt/etc/fstab`

- `arch-chroot /mnt`

To List and then set your timezone accordingly

- `timedatectl list-timezones`

And then set it up like this (replace America/Detroit with your desired time zone):

- `timedatectl set-timezone America/Detroit`

---

#### `Adding Hostname`
In my case, I’ll set the hostname as arch. You can choose whatever you want:
- `echo arch > /etc/hostname`

Set up root password:
- passwd

---

#### `Grub Bootloader`
- `pacman -S grub efibootmgr`
- `mkdir /boot/efi`
- `mount /dev/nvme0n1p1 /boot/efi`
- `grub-install --target=x86_64-efi --bootloader-id=GRUB --efi-directory=/boot/efi`
- `grub-mkconfig -o /boot/grub/grub.cfg`

---
`
#### `Setting up your username and login`
First before we install the Desktop Enviroment we will add a current user to login to
- `user -m yourusername`

Then we will set the password for **this current user**
- `passwd yourusername`

Then we need to install sudo and nano (command line text editor):
- `pacman -S sudo nano`

We have to use nano to edit the configuration so we can log in with our new user we just created
- `EDITOR=nano visudo`

Scroll down until you see the `root ALL=(ALL) ALL`. Below that add this:
- yourusername ALL=(ALL) ALL

---

#### `Installing the Desktop Enviroment (KDE PLASMA)`
To run KDE desktop, you need the following packages:
- Xorg, KDE Plasma, Wayland and KDE Applications

We will get all this with this command
- `pacman -S xorg plasma plasma-wayland-session kde-applications`

This will take a bit download. Once installed enabled the Display Manager and Network Manager with these commands:
- `systemctl enable sddm.service`
- `systemctl enable NetworkManager.service`

---

#### `Optional, Before Restarting (Can skip this process if you wish)`

To remove the stock KDE browser that comes pre-packaged
- `sudo pacman -R konqueror`

Then we can replace it with Firefox
- `sudo pacman -S firefox`

To install git to you can grab AUR packages later on
- `sudo pacman -S git`

We need to install some things before using the AUR:
- `sudo pacman -Sy base-devel`

Now we have git installed if you need NodeJS installed follow this:
- `git clone https://aur.archlinux.org/nvm.git`
- `cd nvm && makepkg -si`

This will install Node Version Manager and we can use this to get the latest version of nodejs and npm but first we need to do a few things.
- `echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.bashrc`
- `exec $SHELL`

Now we can list all the availible versions for nodejs and npm
- `nvm ls-remote`

Install whatever version you want. In this case we will download the latest version at this time
- `nvm install 14.10.0`
- `npm version` or type `npm -v` then `node -v` to verify correct version

Before downloading the folling quick script to download the above applications and tools, we will need nodejs, npm and base-devel installed. Also I recommend changing the mirrors to your local country like so:
- `sudo pacman-mirrors --country United_States && sudo pacman -Syyu` 
- this will speed up the download speed by a lot then install nodejs npm and base-devel in order for package script to work! Only download npm this way if you didn't used the nvm method above!
- `sudo pacman -Sy nodejs npm base-devel`
---

### Optional Applications and Setup
- Discord : `sudo pacman -Sy discord`
- Visual Studio Code: `git clone https://aur.archlinux.org/visual-studio-code-bin.git` then `cd visual-studio-code-bin && makepkg -si`
- Github Desktop: `git clone https://aur.archlinux.org/github-desktop-bin.git` then `cd github-desktop-bin && makepkg -si`
- Vue CLI: `sudo npm i -g @vue/cli`
- Nuxt CLI: `sudo npm i -g create-nuxt-app`
- Firebase: `sudo npm i -g firebase-tools` then `firebase login`
- Github CLI: `sudo pacman -S github-cli` then `gh auth login`

#### `Finishing up`
Once this is all done we can simply type **`exit`** then **`shutdown now`** and you should be able to reboot and log in with out any issues.

If you followed all these steps you should have Arch Linux installed with a KDE desktop enviroment. Firefox, iscord, Github Desktop and VSCode should be installed. Also you should have global access to the Vue and Nuxt CLI tools as well as the Firebase and Github CLI's.
The latest version of NodeJS and NPM should be installed and upto date. 

#### `Additional Information on AUR packages:`
If there is an application that you might seek; google AUR packages. Lets say if you want google chrome for your browser as an example. Type in google chrome AUR. Copy the `Git Clone URL` in the description on the page and put this into your terminal. I will use google chrome as an example https://aur.archlinux.org/packages/google-chrome/. Follow this step: 
- `git clone https://aur.archlinux.org/google-chrome.git`
- `cd google-chrome && makepkg -si`

It's that simple. Hope this helps someone.

#### `Cheers!`

###### Some sources/references of my information 
###### https://itsfoss.com/install-arch-linux/
###### https://itsfoss.com/install-kde-arch-linux/
---