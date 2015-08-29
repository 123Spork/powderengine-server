exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="sprite",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    script_id: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    is_wanderer:{
			type: Boolean,
	        default: false,
	        required:true
	   	},
	    stats_id: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
    	stackable:{
			type: Boolean,
	        default: false,
	        required:true
	   	},
	    image_data:{
			type: Array,
	        default: []
	   	}
	};
	return m.init();
};

