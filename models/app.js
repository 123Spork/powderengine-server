exports.init=function(mongoose){
	return {
		audio: require('./audio.js').init(mongoose),
		character: require('./character.js').init(mongoose),
		character_race: require('./character_race.js').init(mongoose),
		character_class: require('./character_class.js').init(mongoose),
		clan: require('./clan.js').init(mongoose),
		conversation: require('./conversation.js').init(mongoose),
		guild: require('./guild.js').init(mongoose),
		map: require('./map.js').init(mongoose),
		message: require('./message.js').init(mongoose),
		quest: require('./quest.js').init(mongoose),
		script: require('./script.js').init(mongoose),
		skill: require('./skill.js').init(mongoose),
		sprite: require('./sprite.js').init(mongoose),
		tile: require('./tile.js').init(mongoose),
		user: require('./user.js').init(mongoose),
	}
};
