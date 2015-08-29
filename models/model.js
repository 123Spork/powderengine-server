exports.init=function(mongoose,db,options){
	return {
		schema:null,
		schema_object:{},
		model:null,
		object_type:"model",

		init:function(){
			var s_o = {
				created:{
					type: Number,
				    default: Date.now,
				    required:true
				},
				type:{
			    	type: String,
			    	default: this.object_type,
			        required:true
			    },
			};
			for(var i in this.schema_object){
				s_o[i]=this.schema_object[i];
			}
			this.schema = new mongoose.Schema(s_o);
			this.model=mongoose.model(this.object_type,this.schema);
			return this;
		},
		
		create:function(callback,data){
			if(!data){
		 		return callback({
		    		'code':403,
		    		'message':'incorrect fields given for model type: ' + m.type,
		    		'error':err,
		    		'data':null
		    	});
			}
			try{
				var m = new this.model(data);
			}catch(err){
				return callback({
            		'code':403,
            		'message':'incorrect fields given for model type: ' + m.type,
            		'error':err,
            		'data':null
            	});
			}
			m.save(function (err,model) {
			  if (err){
			  	for (var errName in err.errors) {
		        	if(err.errors[errName].type == 'required' || err.errors[errName].type == 'notvalid') 
		            	return callback({
		            		'code':403,
		            		'message':'incorrect fields given for model type: ' + m.type,
		            		'error':err,
		            		'data':null
		            	});
		     	}
			  	return callback({
			  		'code':400,
			  		'message':'error saving model type: ' + m.type,
			  		'error':err,
			  		'data':null
			  	});
			  }
			  return callback({
			  	'code':200,
			  	'message':'ok',
			  	'error':null,
			  	'data':model
			  });
			});
		},

		findByID:function(callback,id){
			if(!id){
		 		return callback({
		    		'code':403,
		    		'message':'incorrect fields given for model type: ' + m.type,
		    		'error':err,
		    		'data':null
		    	});
			}
			this.model.findById(id, function(err, model) {
				if(err){
					return callback({
			    		'code':403,
			    		'message':'an error has been fired',
			    		'error':err,
			    		'data':null
		    		});
				}
				if(!model){
					return callback({
			    		'code':404,
			    		'message':'no model found',
			    		'error':null,
			    		'data':null
		    		});
				}
			    return callback({
			    	'code':200,
		    		'message':'ok',
		    		'error':null,
		    		'data':model
		    	});
		  	});
		},

		find:function(callback,query){
			if(!query){
		 		return callback({
		    		'code':403,
		    		'message':'incorrect search fields given for model type: ' + m.type,
		    		'error':err,
		    		'data':null
		    	});
			}
			this.model.find(query, function(err, models) {
				if(err){
					return callback({
			    		'code':403,
			    		'message':'an error has been fired',
			    		'error':err,
			    		'data':null
		    		});
				}
				if(!models){
					return callback({
			    		'code':404,
			    		'message':'no models found',
			    		'error':null,
			    		'data':null
		    		});
				}
			    return callback({
			    	'code':200,
		    		'message':'ok',
		    		'error':null,
		    		'data':models
		    	});
		  	});
		},

		removeByID:function(callback,id){
			if(!id){
		 		return callback({
		    		'code':403,
		    		'message':'incorrect fields given for model type: ' + m.type,
		    		'error':err,
		    		'data':null
		    	});
			}
			this.model.findByIdAndRemove(id, function(err, model) {
				if(err){
					return callback({
			    		'code':403,
			    		'message':'an error has been fired',
			    		'error':err,
			    		'data':null
		    		});
				}
				if(!model){
					return callback({
			    		'code':404,
			    		'message':'no model found to delete',
			    		'error':null,
			    		'data':null
		    		});
				}
			    return callback({
			    	'code':200,
		    		'message':'ok',
		    		'error':null,
		    		'data':model
		    	});
		  	});
		},

		remove:function(callback,query){
			if(!query){
		 		return callback({
		    		'code':403,
		    		'message':'incorrect search fields given for model type: ' + m.type,
		    		'error':err,
		    		'data':null
		    	});
			}
			this.model.remove(query, function(err, models) {
				if(err){
					return callback({
			    		'code':403,
			    		'message':'an error has been fired',
			    		'error':err,
			    		'data':null
		    		});
				}
				if(!models){
					return callback({
			    		'code':404,
			    		'message':'no models found to delete',
			    		'error':null,
			    		'data':null
		    		});
				}
			    return callback({
			    	'code':200,
		    		'message':'ok',
		    		'error':null,
		    		'data':models
		    	});
		  	});
		},
	};
};

