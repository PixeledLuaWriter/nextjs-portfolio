export const genRandString = (Length) => {
    let str = ''
    for (let i = 0; i < Length; i++) {
        str += String.fromCharCode(Math.floor((Math.random() * (57 - 48 + 1) + 48)), Math.floor(Math.random() * (90 - 65 + 1) + 65), Math.floor(Math.random() * (122 - 97 + 1) + 97))
    }
    return str.slice(0, Length) // Fixes Doubled Length Problem For Yielded Output
} // This is to make react shut up with unique keys

const projects = {
    title: "My Projects",
    description: "These are some projects that i worked on in my free time (feel free to star any of my projects if you want!)",
    projects: [
        {
            title: 'Node Password Hasher/Validator',
            description: "This is a hasher that i wrote within node.js with it's internal crypto module and functions from the official documentation",
            link: 'https://github.com/PixeledLuaWriter/node-password-hasher',
            /** github: 'PixeledLuaWriter/node-password-hasher' */
            tags: ["node-js", "password-hasher", "work-in-progress"],
            id: genRandString(16)
        },
        {
            title: 'CustomGenerateGUID',
            description: `Handwritten Version Of Roblox's Internal game:GetService("HttpService"):GenerateGUID() Function In Lua`,
            link: 'https://github.com/PixeledLuaWriter/CustomGenerateGUID',
            /** github: 'PixeledLuaWriter/CustomGenerateGUID' */
            tags: ["roblox-lua", "lua", "roblox-scripting"],
            id: genRandString(16)
        },
        {
            title: 'RbxChatLoggerModules',
            description: "chat logger that was written for a remote admin",
            link: 'https://github.com/PixeledLuaWriter/RbxChatLoggerModules',
            /** github: 'PixeledLuaWriter/RbxChatLoggerModules' */
            tags: ["roblox-lua", "roblox-scripting"],
            id: genRandString(16)
        },
        {
            title: 'PixeledLuaWriter.github.io',
            description: "A repository mainly for roblox scripts",
            link: 'https://github.com/PixeledLuaWriter/PixeledLuaWriter.github.io',
            /** github: 'PixeledLuaWriter/PixeledLuaWriter.github.io' */
            tags: ["lua", "roblox-lua", "roblox-scripting"],
            id: genRandString(16)
        },
        {
            title: 'nextjs-portfolio',
            description: 'very very first portfolio that was ever created',
            link: 'https://github.com/PixeledLuaWriter/nextjs-portfolio',
            tags: ["portfolio", "nextjs", "portfolio-website"],
            id: genRandString(16)
        },
        {
            title: 'Javascript-RBXGuid',
            description: "Basically a javascript implementation of roblox's guid format but created with a random string function",
            link: 'https://github.com/PixeledLuaWriter/Javascript-RBXGuid',
            tags: ["javaScript", "roblox-scripting", "roblox-to-javascript"],
            id: genRandString(16)
        },
        {
            title: 'Barebones-Discord.JS-v13-template',
            description: "A handmade template of a discord bot using discord.js v13.1.0",
            link: 'https://github.com/PixeledLuaWriter/Barebones-Discord.JS-v13-template',
            tags: ['discord-bot', 'discord-js', 'v13'],
            id: genRandString(16)
        },
        {
            title: 'caesar',
            description: "A CLI tool based on the caesar cipher",
            link: 'https://github.com/PixeledLuaWriter/caesar',
            tags: ['cli', 'caesar-cipher'],
            id: genRandString(16)
        },
        {
            title: "dotfiles-config-files",
            description: "thing that i use for windows terminal and neovim",
            link: 'https://github.com/PixeledLuaWriter/dotfiles-config-files',
            tags: ['dotfiles', 'dotfiles-windows', 'dotfiles-setup'],
            id: genRandString(16)
        }
    ]
};


export default projects
