exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="message",
	m.schema_object={
	    user_id: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    }
	};
	return m.init();
};

