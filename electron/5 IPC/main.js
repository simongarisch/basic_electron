
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const ipc = electron.ipcMain;
const dialog = electron.dialog;

let win;

function createWindow(){
    win = new BrowserWindow({ webPreferences: {nodeIntegration: true}});
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }));

    win.on("closed", () => {
        win = null;
    })
}


ipc.on("open-error-dialog", function(event){
    dialog.showErrorBox("An error message", "Demo of an error message.");
    event.sender.send("opened-error-dialog", "Main process opened the error dialog");
});

// when electron.app is finished initialization 
// we are going to call createWindow 
app.on("ready", createWindow);