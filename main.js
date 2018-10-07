import {app , BrowserWindow} from 'electron';
const url = require('url');
const path = require('path');

app.on('ready' , function(){
   let mainWin = new BrowserWindow({width : 800 , height : 600});
   mainWin.loadURL(url.format({
    pathname : path.join(__dirname , "index.html"),
    protocol : 'file:'
    }));
})