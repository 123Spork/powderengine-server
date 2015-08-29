exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="script",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    script: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    parent_script_id:{
			type: String,
	        default: '',
	        required:true
	   	}
	};
	return m.init();
};

