exports.init=function(worker,models,memory,config){
  	worker.on('login_request', function(data){
       	console.log('recieved login request');
    });
}