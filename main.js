var app = require('app');
var BrowserWindow = require('browser-window');

var globalWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  globalWindow = new BrowserWindow({
    'width': 800,
    'height': 600
  });

  globalWindow.loadUrl('file://' + __dirname + '/index.html');

  globalWindow.on('closed', function() {
    globalWindow = null;
  });
});
