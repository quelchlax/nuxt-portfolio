---
title: Setting up Pop!_OS For Web Developers
description: "Learn how to set up Pop!_OS on your computer and get up and running quickly. Guide is primarily focused towards web developers"
snippet: Installing and setting up Pop OS is very easy. Coming from Windows I wanted some more control over what im doing for many reasons and I fell in love with Pop OS. I have been using it for almost a year now for developing and learning and I think more developers should give it a try, its free and you don't need a state of the ark computer or laptop to get programming all you need is Pop OS and some basic tools.
category: Linux
avatar: "https://pop-planet.info/forums/styles/uix/images/pop-opengraph.png"
---

<h3 class='subtitle'><b>First thing is first</b><h3>

You want to visit the <a href='https://pop.system76.com/'>Pop!OS Website</a> to download the latest version if you haven't done so already. Choose which one suits your current hardware best. For Intel/AMD users with `NVIDIA graphics`, choose the `NVIDIA` option. I recommend using Etcher or Rufus if your currently using Windows or Mac to install Pop!OS then flash it onto a USB.

<br>

<h3 class='subtitle'><b>How to install Pop!_OS</b></h3>

For more information on how to flash a Linux ISO onto a USB drive, simply google and watch a few tutorials. It is very simple. Once you have done all this. Boot into your BIOS and change the current boot to prioritize booting off the USB first. This will allow us to install Pop!OS onto a hard drive of your desire. Again for more information on how to do all this, they're tons of guides online. It is actually very simple and Pop!OS has a very user friendly installation experience. Just follow the steps as prompted. Here is a link from YouTube that might help with the install process https://www.youtube.com/watch?v=CozK7sJ8UMs.

<br>

Once Pop!OS is up and running the Pop!Shop has tons of great applications you can install such as GitHub Desktop, Discord and Visual Studio Code. I recommend downloading these applications this way rather than using the CLI to do so in order to save time and research. If you prefer Atom or Sublime. You can download those also directly off the Pop!Shop.

Going forward if you have a GitHub account and prefer to use the CLI to manage your repositories you can skip downloading GitHub Desktop. GitHub Desktop is simply a nice way to see what changes you have made to projects your working on that might be attached to your GitHub account. It's designed to make managing your git actions a bit easier.

<br>

If you choose to skip downloading Github Desktop or never heard of it. I at least recommend checking it out. Even if your a Windows or Mac user. It's great! Another alternative option is to download the GitHub CLI tool. Check it out at https://cli.github.com/manual/ to get started and learn more about this tool.

Having just a code editor and a few applications to play with simply isn't enough. As a developer we need lots of different tools and just having this setup so far isn't enough. I made a simple solution that should save someone time. I personally use Pop!OS daily for my work needs. I have frequently distribution hopped before settling with Pop!OS. Saying this I thought I should make a shell script to help myself download some basic tools and get up and running a lot quicker.

<br>

**If you wish, check it out at my GitHub repository <a href='github.com/quelchlax/pop.os.config'>here</a>. It might help save some time.**

To clone the script simply type in from your terminal `git clone http://github.com/quelchlax/pop.os.config.git`. Once this is cloned type **`cd pop.os.config && bash run.sh`**. This will install the following tools:

<br>

- `node and npm`
- `yarn`
- `firebase-tools`
- `vue cli`
- `create-nuxt-app`
- `nodemon`
- `typescript`
- `sass`
- `github cli`
- `google chrome`
- `python and pip`

<br>

---

From your terminal run these commands:

For NodeJS and NPM

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v && npm -v
```

<br>

To install the Yarn Package Manager

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
yarn --version
```

<br>

If you use VueJS and NuxtJS for your front end applications

```
sudo npm i -g @vue/cli @vue/cli-init create-nuxt-app
```

Some useful tools (Nodemon, Typescript, Firebase, Sass, Python and Pip)

<br>

```
sudo npm install -g nodemon typescript firebase-tools
sudo apt install ruby-sass
sass -v
sudo apt install python3
sudo apt install python3-pip
```

<br>

To add the GitHub CLI tool. Very useful. If you learn Git and how to use this, you shouldn't have much need for the GitHub Desktop application.

```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
sudo apt update
sudo apt install gh
```

<br>

If you don't like Firefox and want Google Chrome

```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

<br>

With these tools you should be able to get going and create basic applications with VueJS and NuxtJS. If your a Firebase user you will now have direct access to the Firebase CLI and will be able to directly use the `firebase init` command for various needs. Also instead of typing `npx create-nuxt-app <project-name>` or `yarn create-nuxt-app <project-name>` you should be able to directly type `create-nuxt-app <project-name>` then the project name you choose as well as use the Vue CLI to create single page applications using Vue.

<br>

I highly recommend learning the GitHub CLI and basic Git commands to manage your projects. I will post a guide at a later time on how to do this. I hope this helps someone. Cheers!

<br>

_Written by: Eric Quelch_
