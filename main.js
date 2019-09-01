import { app , BrowserWindow } from 'electron';
import windowStateKeeper from 'electron-window-state';
import ElectronReload from 'electron-reload';
ElectronReload(__dirname);

import Devtron from 'devtron';

app.on('ready' , () => {
    Devtron.install();

    let mainWindowState = windowStateKeeper({
        defaultWidth : 800,
        defaultHeight : 600
    });

    let mainWin = new BrowserWindow({ 
        width : mainWindowState.width, 
        height : mainWindowState.height , 
        x : mainWindowState.x,
        y : mainWindowState.y,
        show : false,
        // frame : false,
        // backgroundColor : '#2A2A2A' 
    });

    mainWindowState.manage(mainWin);

    let splashScreen = new BrowserWindow({ 
        width : 800 , 
        height : 600 , 
        transparent: false,
        frame : false
    });

    mainWin.on('closed' , () => {
        app.quit();
        mainWin = null;
    })

    splashScreen.on('closed' , () => splashScreen = null );


    // mainWin.loadURL('http://aparat.com//livelist');
    mainWin.loadURL(`file://${__dirname}/login.html`);
    splashScreen.loadURL(`file://${__dirname}/index.html`);

    mainWin.on('ready-to-show' , () => {
        mainWin.show();
        splashScreen.close();
    })



});