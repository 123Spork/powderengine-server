exports.init=function(config,models){
    var express = require('express'),
        cluster = require('cluster'),
        net = require('net'),
        sio = require('socket.io');

    var num_processes = require('os').cpus().length;

    if (cluster.isMaster) {
        var workers = [];
        var memory={};
        var spawn = function(i) {
            workers[i] = cluster.fork();
            require('./master_handlers/app.js').init(workers[i],models,memory,config)          
        };

        for (var i = 0; i < num_processes; i++) {
            console.log('spawning worker', i);
            spawn(i);
        }

        var worker_index = function(ip, len) {
            var s = '';
            for (var i = 0, _len = ip.length; i < _len; i++) {
                if (ip[i] !== '.') {
                    s += ip[i];
                }
            }
            return Number(s) % len;
        };

        var server = net.createServer({ pauseOnConnect: true }, function(connection) {
            var worker = workers[worker_index(connection.remoteAddress, num_processes)];
            worker.send('sticky-session:connection', connection);
        }).listen(config.server_port);
    } else {
        var app = new express();
        var server = app.listen(0, 'localhost'),
            io = sio(server);
        var memory={};

        io.sockets.on('connection', function (socket) {
            require('./worker_handlers/app.js').init(socket,process,models,memory,config)          
        });

        process.on('message', function(message, connection) {
            if (message !== 'sticky-session:connection') {
                return;
            }
            server.emit('connection', connection);
            connection.resume();
        });
    }
}