// created by faridvatani
// Project name Wifi Scanner 
// date : 

import {app , BrowserWindow} from 'electron';
import url from 'url';
import path from 'path';
import ElectronReload from 'electron-reload';
ElectronReload(__dirname);
import devtron from 'devtron';


app.on('ready' , function(){
   devtron.install();
   let mainWin = new BrowserWindow({width : 800 , height : 600});
   mainWin.loadURL(url.format({
    pathname : path.join(__dirname , "index.html"),
    protocol : 'file:'
    }));
})