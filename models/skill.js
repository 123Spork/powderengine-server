exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="skill",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    sprite_id: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    default_level:{
			type: Number,
	        default: 0,
	        required:true
	   	},
	    maximum_level:{
			type: Number,
	        default: 100,
	   	},
	    is_healthbar:{
			type: Boolean,
	        default: false,
	        required:true
	   	}
	};
	return m.init();
};

