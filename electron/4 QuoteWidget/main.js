
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){

    win = new BrowserWindow({
        height: 150, width: 500, frame: false, show: false,
        webPreferences: { nodeIntegration: true}
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }));

    win.on("closed", () => {
        win = null;
    })

    win.once("ready-to-show", () => {
        win.show();
    })
}

// when electron.app is finished initialization 
// we are going to call createWindow 
app.on("ready", createWindow);