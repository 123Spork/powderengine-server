exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="character_class",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    stats_id:{
			type: String,
	        default: '',
	        trim: true,
	        required:true
	    }
	};
	return m.init();
};

