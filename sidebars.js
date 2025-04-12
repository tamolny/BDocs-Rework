/*
When adding pages to the sidebar, make sure you use the page ID, not the file name of the page
For example, to add a page which had a filename of 'chunky-multi' and a page ID of 'chunky', you would add the following under the appropriate category:

'plugins_and_modifications/multiplatform/chunky'

'plugins_and_modifications/multiplatform/' is the path to the file and '/chunky' is the page ID.

The page ID can be found at the top of each document (usually the second line) where it will say 'id: <pageid>' (<pageid> would be the page ID you put into `sidebars.js`)

Not following this can cause the website build to fail!
*/
module.exports = {
    /* Organize sidebar alphabetically */

    docs: [
        {
            type: 'link',
            label: 'Website',
            href: 'https://bloom.host/'
        },
        {
            type: 'link',
            label: 'Support Discord',
            href: 'https://discord.gg/bloom',
        },
        {
            type: 'link',
            label: 'Billing Support',
            href: 'https://billing.bloom.host/supporttickets.php',
        },

        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'getting_started/overview',
            ],
        },

        {
            type: 'category',
            label: 'Using the Panel',
            collapsed: false,
            items: [
                {
                    type: 'link',
                    label: 'Feature Summary',
                    href: 'https://bloom.host/duck-panel',
                },
                'using_the_panel/basic-controls',
                'using_the_panel/file-manager-controls',
                'using_the_panel/server-importer',
                'using_the_panel/schedules',
                'using_the_panel/backups/backups',
                'using_the_panel/users',
                'using_the_panel/databases',
                'using_the_panel/ports-and-proxies',
                'using_the_panel/sftp',
                'using_the_panel/split-server',
                'using_the_panel/2fa'
            ],
        },

        {
            type: 'category',
            label: 'Running a Server',
            collapsed: true,
            items: [
                'minecraft/running_a_server/updating', // How to update
                'minecraft/running_a_server/jars', // Explains the different server JAR file options
                'minecraft/running_a_server/optimization', // Server optimisation information
                'minecraft/running_a_server/world-reset',
                'minecraft/running_a_server/domain',
                'minecraft/running_a_server/java-version',
                'minecraft/running_a_server/datapacks',
                'minecraft/running_a_server/spark',
                'minecraft/running_a_server/icon',
                'minecraft/running_a_server/motd',
                'minecraft/running_a_server/whitelist', // How to turn on whitelist for both Java and Bedrock
                'minecraft/running_a_server/resourcepack',
                'minecraft/running_a_server/converting-worlds', // Converting worlds used on Bukkit (and forks) servers to allow for use in singleplayer/other server software
                'minecraft/running_a_server/waterfall', // [Unsupported] BungeeCord fork
                'minecraft/running_a_server/velocity',
                'minecraft/running_a_server/internal-servers',
                'minecraft/running_a_server/binarysearch', // Troubleshooting errors caused by plugins
                'minecraft/running_a_server/worlds',
                'minecraft/running_a_server/mcaselector'
            ],
        },

        {
            type: 'category',
            label: 'Games',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Palworld',
                    items: [
                        'games/palworld/config',
                        'games/palworld/update',
                        'games/palworld/info'
                    ]
                },
                {
                    type: 'category',
                    label: 'Rust',
                    items: [
                        'games/rust/connecting',
                        'games/rust/admin',
                        'games/rust/server-list',
                        'games/rust/plugins',
                        'games/rust/worlds'
                    ]
                },
                {
                    type: 'category',
                    label: 'Terraria',
                    items: [
                        {
                            type: 'doc',
                            id: 'games/terraria/connecting'
                        },
                        {
                            type: 'doc',
                            id: 'games/terraria/password'
                        },
                        {
                            type: 'doc',
                            id: 'games/terraria/worlds'
                        },
                        {
                            type: 'doc',
                            id: 'games/terraria/banning'
                        },
                        {
                            type: 'category',
                            label: 'TShock',
                            collapsed: false,
                            items: [
                                'games/terraria/tshock/overview',
                                'games/terraria/tshock/admin',
                                'games/terraria/tshock/whitelisting',
                                'games/terraria/tshock/plugins',
                                'games/terraria/tshock/crossplay'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'tModLoader',
                            collapsed: false,
                            items: [
                                'games/terraria/tmodloader/overview',
                                'games/terraria/tmodloader/mods'
                            ]
                        }
                    ]
                }
            ]
        },

        {
            type: 'category',
            label: 'Plugins & Modification',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: "minecraft/plugins_and_modifications/installing-plugin", // Bukkit/Spigot/Paper plugin installation guide
                },
                {
                    type: 'doc',
                    id: "minecraft/plugins_and_modifications/mods-install", // Mods install guide for both Forge and Fabric and Neoforge
                },
                {
                    type: 'doc',
                    id: "minecraft/plugins_and_modifications/modpacks",
                },
                {
                    type: 'doc',
                    id: "minecraft/plugins_and_modifications/gtnh", //GTNH
                },
                {
                    type: 'category',
                    label: "Fabric mods",
                    items: [ // Note: Chunky and LuckPerms pages were moved to multiplatform category
                        'minecraft/plugins_and_modifications/fabric_mods/performance-mods' // Mods intended to improve client/server performance
                    ]
                },

                {
                    type: 'category',
                    label: "Multi-platform plugins & mods",
                    items: [
                        'minecraft/plugins_and_modifications/multiplatform/advancedban', // Bans and punishment manager (Bukkit/Spigot/Paper, BungeeCord)
                        'minecraft/plugins_and_modifications/multiplatform/bluemap', // 3D web map (Spigot/Paper, Paper/Folia, Forge, Fabric, Neoforge, Sponge)
                        'minecraft/plugins_and_modifications/multiplatform/chunky', // World pre-generation plugin (Bukkit, Fabric, Forge)
                        'minecraft/plugins_and_modifications/multiplatform/dynmap', // Dynamic web map of Minecraft worlds (Spigot/Paper, Forge, Fabric)
                        'minecraft/plugins_and_modifications/multiplatform/litebans', // Bans and punishment manager (Spigot/Paper, BungeeCord, Velocity)
                        'minecraft/plugins_and_modifications/multiplatform/luckperms', // Permissions (Bukkit/Spigot/Paper, BungeeCord, Sponge, Forge, Fabric, Nukkit, Velocity)
                        'minecraft/plugins_and_modifications/multiplatform/plan', // Player Analytics, (Bukkit/Spigot/Paper, Sponge, Nukkit, Fabric)
                        'minecraft/plugins_and_modifications/multiplatform/simple-voice-chat', // Voice chat (Bukkit/Spigot/Paper, Forge, Fabric)
                        'minecraft/plugins_and_modifications/multiplatform/squaremap', // Online map (Paper, Fabric, Sponge)
                        'minecraft/plugins_and_modifications/multiplatform/worldedit' // World management (Bukkit, Forge, Fabric, Sponge)
                    ]
                },

                {
                    type: 'category',
                    label: "Plugins", // Bukkit/Spigot/Paper plugins
                    items: [ // Note: Chunky, LiteBans, LuckPerms and PLAN pages were moved to multiplatform category
                        'minecraft/plugins_and_modifications/plugins/advancedanticheat', // anticheat (discontinued)
                        'minecraft/plugins_and_modifications/plugins/ajparkour', // ajParkour
                        'minecraft/plugins_and_modifications/plugins/banannouncer', // announce bans in discord
                        'minecraft/plugins_and_modifications/plugins/citizens2',
                        'minecraft/plugins_and_modifications/plugins/conditionalcommands',
                        'minecraft/plugins_and_modifications/plugins/coreprotect',
                        'minecraft/plugins_and_modifications/plugins/craftingstore',
                        'minecraft/plugins_and_modifications/plugins/discordsrv', //Discord <-> Minecraft bridge
                        'minecraft/plugins_and_modifications/plugins/essentialsx',
                        'minecraft/plugins_and_modifications/plugins/floodgate', // Works with GeyserMC to allow bedrock connections, without a Java Edition account.
                        'minecraft/plugins_and_modifications/plugins/geysermc', // Minecraft Bedrock player bridge
                        'minecraft/plugins_and_modifications/plugins/geyseraddons', // GeyserMC addons
                        'minecraft/plugins_and_modifications/plugins/griefprevention',
                        'minecraft/plugins_and_modifications/plugins/milk',
                        'minecraft/plugins_and_modifications/plugins/multiverse', //Bukkit multi-world manager
                        'minecraft/plugins_and_modifications/plugins/papi', // PlaceholderAPI
                        'minecraft/plugins_and_modifications/plugins/prism',
                        'minecraft/plugins_and_modifications/plugins/servernpc',
                        'minecraft/plugins_and_modifications/plugins/tebex', // Minecraft server donation store integration, formerly known as BuyCraft
                        'minecraft/plugins_and_modifications/plugins/vault',
                        'minecraft/plugins_and_modifications/plugins/venturechat', // Chat handler
                        'minecraft/plugins_and_modifications/plugins/viaversion',
                        'minecraft/plugins_and_modifications/plugins/votifier', // Minecraft server vote site listener
                        'minecraft/plugins_and_modifications/plugins/vulcan', // anticheat
                        'minecraft/plugins_and_modifications/plugins/oraxen',
                        'minecraft/plugins_and_modifications/plugins/denizen',
                        'minecraft/plugins_and_modifications/plugins/ajLeaderboards',
                        'minecraft/plugins_and_modifications/plugins/AdvancedEnchantments',
                        'minecraft/plugins_and_modifications/plugins/CMI',
                        "minecraft/plugins_and_modifications/install-proxy-plugin", // BungeeCord/Velocity proxy plugin install guide
                    ]
                }
            ]
        },

        {
            type: 'category',
            label: 'Other Servers',
            collapsed: true,
            items: [
                'other-servers/ark',
                'other-servers/caddy-server',
                'other-servers/grafana',
            ],
        },

        {
            type: 'category',
            label: 'VPS',
            collapsed: true,
            items: [
                'VPS/starting-with-vps',
                'VPS/vnc',
                'VPS/credentials-vps',
                'VPS/virtfusion-subuser'
            ],
        },

        {
            type: 'category',
            label: 'Dedicated',
            collapsed: true,
            items: [
                'dedicated/reset-password'
            ],
        },

        {
            type: 'category',
            label: 'Billing',
            collapsed: true,
            items: [
                'billing/email_change',
                'billing/cancellations',
                'billing/upgrades',
                'billing/refunds',
                'billing/suspensions_and_terminations',
                'billing/billing_subusers',
                'billing/paypal',
                'billing/stripe'
            ],
        },

        {
            type: 'category',
            label: 'Extras',
            collapsed: true,
            items: [
                'extras/ping-issues',
                'extras/account-details',
                'extras/available-modpacks',
                'extras/serverpackcreator',
                'extras/srvcontrol',
                'extras/swap',
                'extras/clumsyloader'
            ],
        },

    ]
}
