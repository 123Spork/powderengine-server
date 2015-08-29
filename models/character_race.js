exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="character_race",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    sprite_ids:{
			type: Array,
	        default: [],
	        required:true
	    },
	    class_ids:{
			type: Array,
	        default: [],
	        required:true
	    }
	};
	return m.init();
};

