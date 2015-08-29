exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="quest",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    objectives:{
			type: Array,
	        default: [],
	        required:true
	    }
	};
	return m.init();
};

