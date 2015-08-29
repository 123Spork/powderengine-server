exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="clan",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    abbreviation:{
			type: String,
	        default: '',
	        trim: true,
	        required:true
	    }
	};
	return m.init();
};

