exports.init=function(mongoose,db,options){
	var m = require('./model.js').init(mongoose)
	m.object_type="user",
	m.schema_object={
	    name: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    email: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    password: {
	        type: String,
	        default: '',
	        trim: true,
	        required:true
	    },
	    permission: {
	        type: Number,
	        default: 0,
	        trim: true,
	        required:true
	    },
	    character_ids:{
			type: Array,
	        default: [],
	        required:true
	   	},
	    friend_ids:{
			type: Array,
	        default: [],
	        required:true
	   	},
	    conversation_ids:{
			type: Array,
	        default: [],
	        required:true
	   	},
	    clan_id:{
			type: String,
	        default: '',
	        required:true
	   	}
	};
	return m.init();
};

