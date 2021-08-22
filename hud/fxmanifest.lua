fx_version 'cerulean'
games { 'gta5' }

author 'Redven Biker (XLife.fr)'
description 'Discord : https://discord.gg/C3aN2bBVbB'
version '1.0.0'

client_script { 
    'config.lua',
    'client.lua'
}

server_scripts {
    '@mysql-async/lib/MySQL.lua',
    'config.lua',
    'server.lua'
}

files {
    'index.html',
    'css/style.css',
    'js/script.js',
    'img/logo.png',
    'img/background.jpg',
    'music/music.mp3'
}