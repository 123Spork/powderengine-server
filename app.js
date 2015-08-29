var mongoose = require('mongoose');
var config = require('./config');
var models = require('./models/app.js').init(mongoose);
mongoose.connect(config.uri,config.options);

//EXIT CLEANUP HANDLER
process.stdin.resume();
function exitHandler(options, err) {
    mongoose.connection.close();
    if (options.cleanup) console.log('clean');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}
process.on('exit', exitHandler.bind(null,{cleanup:true}));
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

//START SERVER
var server = require('./server/app.js').init(config,models);