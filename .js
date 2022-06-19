// Basic bot that utilizes the configuration file
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.on('ready', () => {
  console.log('I am ready');
});

client.on('message', msg => {
  if(msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(config.token); // Logs in with the token you specified in config.json