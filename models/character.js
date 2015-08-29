exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="character",
	m.schema_object={
	    race_id: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
  		class_id: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
		guild_data: {
	        type: Array,
	        default: []
	    },
		quest_data: {
	        type: Object,
	        default: {}
	    },
		skill_data: {
	        type: Object,
	        default: {}
	    },
		inventory_data: {
	        type: Array,
	        default: []
	    },
		equipment_data: {
	        type: Array,
	        default: []
	    },
		bank_data: {
	        type: Array,
	        default: []
	    },
	};
	return m.init();
};
