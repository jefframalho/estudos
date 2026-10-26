const { app, BrowserWindow } = require('electron');
const path = require('path');

function criarJanela() {
  const win = new BrowserWindow({
    width: 1000,
    height: 760,
    minWidth: 400,
    title: 'Estudos',
    autoHideMenuBar: true,
   
  });
  win.loadFile('index.html');
}

app.whenReady().then(criarJanela);
app.on('window-all-closed', () => app.quit());