
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");


let winOne, winTwo;


function createWindow(){

    winOne = new BrowserWindow({webPreferences: {
        nodeIntegration: true
    }});

    // looks to be a touch buggy with this second window
    winTwo = new BrowserWindow({webPreferences: {
        nodeIntegration: true
    }});

    winOne.loadURL(url.format({
        pathname: path.join(__dirname, "one.html"),
        protocol: "file",
        slashes: true
    }));

    winTwo.loadURL(url.format({
        pathname: path.join(__dirname, "two.html"),
        protocol: "file",
        slashes: true
    }));

    winOne.on("closed", () => {winOne = null;})
    winTwo.on("closed", () => {winTwo = null;})
}

// when electron.app is finished initialization 
// we are going to call createWindow 
app.on("ready", createWindow);