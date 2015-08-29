exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="map",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    audio_id: {
	        type: String,
	        default: '',
	        trim: true,
	    },
	    size_x:{
			type: Number,
	        default: 10,
	        required:true
	    },
	    size_y:{
			type: Number,
	        default: 10,
	        required:true
	    },
	    tile_ids:{
			type: Array,
	        default: [],
	        required:true
	    },
	    map_connector_ids:{
			type: Object,
	        default: {},
	        required:true
	    }
	};
	return m.init();
};

