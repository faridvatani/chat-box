import { app , BrowserWindow } from 'electron';
import windowStateKeeper from 'electron-window-state';
import ElectronReload from 'electron-reload';
ElectronReload(__dirname);

import Devtron from 'devtron';

app.on('ready' , () => {
    Devtron.install();

    let mainWindowState = windowStateKeeper({
        defaultWidth : 1200,
        defaultHeight : 600
    });

    let mainWin = new BrowserWindow({ 
        width : mainWindowState.width, 
        height : mainWindowState.height , 
        x : mainWindowState.x,
        y : mainWindowState.y,
        show : false,
        backgroundColor : '#e74c3c' });

    mainWindowState.manage(mainWin);

    let splashScreen = new BrowserWindow({ 
        width : 500 , 
        height : 500 , 
       transparent: true,
//        backgroundColor : '#1abc9c',
        frame : false});

    mainWin.on('closed' , () => {
        app.quit();
        mainWin = null;
    })

    splashScreen.on('closed' , () => splashScreen = null );


    mainWin.loadURL('http://aparat.com/');
    splashScreen.loadURL(`file://${__dirname}/index.html`);

    mainWin.on('ready-to-show' , () => {
        mainWin.show();
        splashScreen.close();
    })
});