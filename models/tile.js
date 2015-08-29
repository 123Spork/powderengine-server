exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="tile",
	m.schema_object={
	    script_id: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    floor_image_data:{
			type: Array,
	        default: [],
	        required:true
	   	},
	   	sky_image_data:{
			type: Array,
	        default: [],
	        required:true
	   	}
	};
	return m.init();
};
