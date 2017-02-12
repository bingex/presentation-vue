import express from 'express';
import socket from 'socket.io';

// Create express server
const app = express();

// If app is running on Herocu or other cloud
let port = process.env.PORT || 8000;

// Initialize socket.io object
let io = socket.listen(app.listen(port));

// Make the files in the public folder available to the world
app.use(express.static(__dirname + '/public'));

// This is a secret key that prevents others from opening your presentation
let secret = '1';

// Initialize a new socket.io application
let presentation = io.on('connection', function(socket) {
  // Clients send the 'slide-changed' message whenever they navigate to a new slide.
  socket.on('slide-changed', data => {
    socket.broadcast.emit('slideChange', {
      data: data
    });
  });

  socket.on('login', data => {
    if (data === secret) {
      socket.emit('loginSuccess');
    }
  });
});

console.log('Your presentation is running on ' + port);
