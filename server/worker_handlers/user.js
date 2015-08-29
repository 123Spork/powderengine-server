exports.init=function(socket,master,memory,models,config){
  	socket.on('login_request', function(data){
       	console.log('recieved login request');
    });
}