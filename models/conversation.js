exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="conversation",
	m.schema_object={
	    message_ids:{
			type: Array,
	        default: '',
	        required:true
	    }
	};
	return m.init();
};

