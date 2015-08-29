exports.init=function(socket,master,memory,models,config){
/*	audio: require('./audio.js'),
	character: require('./character.js'),
	character_race: require('./character_race.js'),
	character_class: require('./character_class.js'),
	clan: require('./clan.js'),
	conversation: require('./conversation.js'),
	guild: require('./guild.js'),
	map: require('./map.js'),
	message: require('./message.js'),
	quest: require('./quest.js'),
	script: require('./script.js'),
	skill: require('./skill.js'),
	sprite: require('./sprite.js'),
	tile: require('./tile.js'),*/
	require('./user.js').init(socket,master,memory,models,config);
}
