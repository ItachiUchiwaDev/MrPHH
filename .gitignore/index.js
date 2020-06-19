const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('message', message => {
    if(message.content === prefix + "cmd"){
    message.reply("**Voici la liste des commandes :** \n **!addrole** (Pour ajouter un rôle à n'importe qui) \n **!delrole** (Bah c'est la même chose que avant mais sauf que t'enlève un rôle à n'importe qui. Pff j'me répète et j'aime pas ça.) \n **!kick** (Bah t'as deviné c'est pour expulser quelqu'un) \n **!ping** (Ouais c'est pour tester ton temps de latence, mais blc vraiment mon créateur un peu con sur les bords faut le lui dmd de enlever cette commande inutile, vraiment. \n **!stats** Ca c'est pour stalk quelqu'un enfin pas vraiment mais si t'as rien a faire et que surtout faire chier le peuple a mentionner tout le monde bah voilà. Et encore une fois mon créateur est con là-dessus --' \n **!clear** Avec ça tu peux supprimer les messages mtn, une chose utile parfois.)");
    }
});

client.on('ready', () => {
    console.log("Connected");
});

client.on('message', message => {
    if (message.content === 'Salut') {
        message.reply('Yo ça roule ?');
    }

    if (message.content === 'Oui et toi ?') {
        message.reply('Ouais trkl, tfk ?');
    }

    if (message.content === 'Oui') {
        message.reply('Ah daq, tu fais quoi ?');
    }

    if (message.content === 'Rien') {
        message.reply('Oue cool.');
    }

    if (message.content === 'Azy tu seras mon pote') {
        message.reply('Oue nah merci, pas la peine je n\'en veux pas de ta fausse compagnie.');
    }

    if (message.content === 'Cmt ça va ?') {
        message.reply('Bien et toi ?');
    }

    if (message.content === 'Moi ça va et toi ?') {
        message.reply('Ca va ça va');
    }

    if (message.content === 'Tg') {
        message.reply('Toi tg connard !');
    }

    if (message.content === 'tg') {
        message.reply('Eh pk toi tu la fermerais pas twa hein poufiasse ?');
    }

    if (message.content === 'Poufiasse') {
        message.reply('Oue nah en fait, c\'est toi la pétasse ici la');
    }

    if (message.content === 'Sale pute') {
        message.reply('Ouais c\'est bien ta mere ;)');
    }

    if (message.content === 'Sale batard') {
        message.reply('Entre nous deux tu sais très bien qui est le batard ici ;)');
    }

    if (message.content === 'blc') {
        message.reply('Ouais t\'as raison ;)');
    }

    if (message.content === 'clc') {
        message.reply('Oui j\'avoue');
    }
});

const fs = require('fs');

client.login("process.env.TOKEN");

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if (error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if (commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} La commande à été chargé et prête a être utilisé !`);

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if (error) console.log(error);
    console.log(`${f.length} Evènements ont été chargés !`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});
