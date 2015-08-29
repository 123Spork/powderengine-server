exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="audio",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    source:{
			type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    repeat:{
	    	type: Boolean,
	    	default: false,
	        required:true
	    }
	};
	return m.init();
};

