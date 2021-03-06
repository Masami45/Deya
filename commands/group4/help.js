const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: ['commands', 'h', 'cmds'],
            group: 'group4',
            memberName: 'help',
            description: 'Shows commands of the Bot',
            args: [
                    {
                        key: 'command',
                        prompt: 'Which command would you like to view the help for?',
                        type: 'string',
                        default: ''
                    }
            ]
        });
    }
    async run(msg, args) {
        const groups = this.client.registry.groups;
        const commands = this.client.registry.findCommands();

              const grp0c = commands.findAll('groupID','general');
        var grp0 = "";
        if(grp0c.length > 0){
            for(var i = 0; i < grp0c.length; i++){
                grp0=grp0+"`"+grp0c[i].name+"`";
                if(i+1 < grp0c.length){
                    grp0=grp0+", ";
                }
            }
        }
      
        const grp1c = commands.findAll('groupID','fun1');
        var grp1 = "";
        if(grp1c.length > 0){
            for(var i = 0; i < grp1c.length; i++){
                grp1=grp1+"`"+grp1c[i].name+"`";
                if(i+1 < grp1c.length){
                    grp1=grp1+", ";
                }
            }
        }


        const grp2c = commands.findAll('groupID','group2');
        var grp2 = "";
        if(grp2c.length > 0){
            for(var i = 0; i < grp2c.length; i++){
                grp2=grp2+"`"+grp2c[i].name+"`";
                if(i+1 < grp2c.length){
                    grp2=grp2+", ";
                }
            }
        }

        const grp3c = commands.findAll('groupID','group3');
        var grp3 = "";
        if(grp3c.length > 0){
           for(var i = 0; i < grp3c.length; i++){
                grp3=grp3+"`"+grp3c[i].name+"`";
                if(i+1 < grp3c.length){
                    grp3=grp3+", ";
                }
            } 
        }
            

        const grp4c = commands.findAll('groupID','group4');
        var grp4 = "";
        if(grp1c.length > 0){
            for(var i = 0; i < grp4c.length; i++){
                grp4=grp4+"`"+grp4c[i].name+"`";
                if(i+1 < grp4c.length){
                    grp4=grp4+", ";
                }
            }
        }

        const grp5c = commands.findAll('groupID','group5');
        var grp5 = "";
        if(grp1c.length > 0){
            for(var i = 0; i < grp5c.length; i++){
                grp5=grp5+"`"+grp5c[i].name+"`";
                if(i+1 < grp5c.length){
                    grp5=grp5+", ";
                }
            }
        }

        const grp6c = commands.findAll('groupID','group6');
        var grp6 = "";
        if(grp1c.length > 0){
            for(var i = 0; i < grp6c.length; i++){
                grp6=grp6+"`"+grp6c[i].name+"`";
                if(i+1 < grp6c.length){
                    grp6=grp6+", ";
                } 
            } 
        } 
        const ownerg = commands.findAll('groupID','commands');
        var owner = "";
        if(grp1c.length > 0){
            for(var i = 0; i < ownerg.length; i++){
                owner=owner+"`"+ownerg[i].name+"`";
                if(i+1 < ownerg.length){
                    owner=owner+", ";
                }
            }
        }
      
        const embed = new RichEmbed()
                if(commands.find('name',args.command)){
                    const cmd = this.client.registry.findCommands().find('name', args.command);
                    embed.setTitle("Help for " + cmd.name)
                    embed.addField("Description", cmd.description+" ")
                    var aliass = "";
                    var examp = "";
                    if(cmd.aliases.length > 0){
                        for(var i = 0; i < cmd.aliases.length;i++){
                            aliass=aliass+"`"+cmd.aliases[i]+"`";
                            if(i+1 < cmd.aliases.length){
                                aliass=aliass+", ";
                            }
                        }
                    embed.addField("Aliases",aliass+" ")
                    }

                    if(cmd.examples != null){
                        for(var i = 0; i < cmd.examples.length;i++){
                            examp=examp+"`"+cmd.examples[i]+"`";
                            if(i+1 < cmd.examples.length){
                                examp=examp+", ";
                            }
                        }
                        embed.addField("Examples",examp+" ")
                    }
                
                }else{

                    embed.setTitle('Deya Commands')
                    if(grp0c.length > 0){
                        embed.addField(groups.find('id','general').name+"",grp0+" ")
                    }
                    if(grp1c.length > 0){
                        embed.addField(groups.find('id','fun1').name+"",grp1+" ")
                    }
                    if(grp2c.length > 0){
                        embed.addField(groups.find('id','group2').name+"",grp2+" ")
                    }
                    if(grp3c.length > 0){
                        embed.addField(groups.find('id','group3').name+"",grp3+" ")
                    }
                    if(grp4c.length > 0){
                        embed.addField(groups.find('id','group4').name+"",grp4+" ")
                    }
                    if(grp5c.length > 0){
                        embed.addField(groups.find('id','group5').name+"",grp5+" ")
                    }
                    if(grp6c.length > 0){
                        embed.addField(groups.find('id','group6').name+"",grp6+" ")
                    }
                    
                    if(this.client.isOwner(msg.author)){
                    if(owner.length > 0){
                        embed.addField(groups.find('id','commands').name+"",owner+" ")
                    }}
                    
                }
                
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }

};