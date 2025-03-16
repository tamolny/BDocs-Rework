---
id: jars
title: Server Jars
slug: /jars
hide_table_of_contents: true
sidebar_label: Server Softwares
description: This guide will help you choose which jar to use.
keywords:
  - Spigot
  - Paper
  - Bukkit
  - Forge
  - Fabric
  - NeoForge
  - Purpur
  - Pufferfish
  - Server Jars
  - Minecraft
  - Modded Server Jars
  - Plugin Server Jars
  - Bloom.host
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Recommended Software:

 ### [Paper](https://papermc.io/)
 Paper is a [fork](https://en.wikipedia.org/wiki/Fork_(software_development)) of Spigot and aims to have better performance and stability. It also has an expanded API, allowing plugins to become even faster. This jar is highly recommended as it fixes exploits, bugs, and more as well as it greatly improves performance and stability of any Minecraft server.  
 Paper works with Bukkit and Spigot plugins and is the recommended default jar.

---

## Modded Minecraft:
<Tabs groupId="Modded Installers">
  <TabItem value="Forge" label="Forge">

    ### [Forge](https://files.minecraftforge.net/) ([Installation Guide](forge-setup))
Forge is a jar that adds a modding API for developers to tap into. It is much more expansive than Bukkit, as players also have to install mods on their end, allowing for more possibilites. It's recommended for mods and modpacks. Mostly used for older versions of the game. (pre1.12)

  </TabItem>
  <TabItem value="Fabric" label="Fabric">

    ### [Fabric](https://fabricmc.net/) ([Installation Guide](fabric-setup))
Fabric is a jar that makes modding easier and smoother than Forge. Fabric is considered superior to Forge due to a better API that is more documented. It's mostly used for more modern versions of the game.   
Fabric, with a few performance mods added, is recommended if you want to run a modern technical MC server.

  </TabItem>
  <TabItem value="Neoforge" label="Neoforge">

    ### [NeoForge](https://neoforged.net/) ([Installation Guide](neoforge-setup))
NeoForge is a jar that adds the modding api of Forge, and performance of Fabric. While still being new and becoming widely adopted. Used in modern versions of the game.

  </TabItem>
</Tabs>

<Tabs groupId="Modded Installers">
  <TabItem value="Forge" label="Forge Installer">
  Install guide here
  </TabItem>

  <TabItem value="Fabric" label="Fabric Installer">
  Install guide for fabric
  </TabItem>
  <TabItem value="Neoforge" label="Neoforge Installer">
  
  ---
  ### What is Neoforge?
  "*Neoforge is a new mod loader that incorperates Neoforge performance and Forge api*"
  
  Mods can be used to modify, remove or even add new content to Minecraft.
  
  
  ### Installing Neoforge
  Go the the `Settings` tab on the panel and on the right side you will see `Change Server Type` box. 
  Edit the boxes to the Neoforge version you would like to use.
  
  ![](/plugins_and_modifications/neoforge_setup/NeoforgeInstaller.png)
  
  Click `Change Server Type`, this will download Neoforge to your server. 
  
  You are now done, you are running a Neoforge server!  
  It's a server without mods though, so it's still purely vanilla at this point, keep reading to learn how to install mods.
  
  ### Installing Neoforge Mods
  
  Refer to [this](mods-install.md) guide.
  
  ---

  </TabItem>
</Tabs>
## Other popular options: 
---

:::danger[Hybrids]
Some popular Jars such as Mohist/Magma attempt to merge Bukkit and Forge to allow the use of Plugins and Mods in the same enviorment, while popular these implementations can end up combining the issues of both server types and be unstable as a result.
:::
<Tabs>
  <TabItem value="Pufferfish" label="Pufferfish">

### [Pufferfish](https://github.com/pufferfish-gg/Pufferfish)
"A highly optimized Paper fork designed for large servers requiring both maximum performance, stability, and "enterprise" features."  
Pufferfish is a fork of paper (and as such also includes all of the improvements paper adds) that aims to add even more performance optimizations over paper. It includes every change that airplane used to have. And adds some of its own changes too.

  </TabItem>
  <TabItem value="Purpur" label="Purpur">

### [Purpur](https://purpurmc.org/)
"Purpur is a drop-in replacement for Paper servers designed for configurability and new, fun, exciting gameplay features.
"  
Purpur aims to make your server more configurable, it adds **a lot** of fun or useful (all off by default) [configuration options](https://purpurmc.org/docs/Configuration/) to your server, it adds these on top of the paper and pufferfish improvements.

  </TabItem>
  <TabItem value="Spongepowered" label="Spongepowered">

### [Sponge](https://www.spongepowered.org/)
 Sponge is an API designed to work with forge allowing the use of mods and plugins together in a stable environment. Currently, Sponge is recommended if you want modpacks and plugins together as smoothly as possible. However, Sponge does not support any sort of Spigot/Paper plugins as it's a completely different software.

  </TabItem>
</Tabs>
