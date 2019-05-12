
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");


let win, dimWindow, colorWindow, framelessWindow;
let parentWindow, childWindow;
let parentModalWindow, childModalWindow;


function createWindow(){
    // https://electronjs.org/docs/api/browser-window
    /*
    win = new BrowserWindow();
    dimWindow = new BrowserWindow({width:400, height:400, maxWidth:600, maxHeight:600});
    colorWindow = new BrowserWindow({ backgroundColor: '#2e2c29' });
    framelessWindow = new BrowserWindow({ backgroundColor: '#80000', frame: false });
    */

   // the child window in this next case will always be on top
   //parentWindow = new BrowserWindow({title: "Parent"});
   //childWindow = new BrowserWindow({title: "Child", parent: parentWindow});

   // we can also create a modal window (need to do something with child before going back to parent)
   parentModalWindow = new BrowserWindow({title: "Parent"});
   childModalWindow = new BrowserWindow({show: false, title: "Child", modal: true, parent: parentModalWindow});
   childModalWindow.loadURL("https://github.com/");
   childModalWindow.once("ready-to-show", () => {
       childModalWindow.show();
   });
}

// when electron.app is finished initialization 
// we are going to call createWindow 
app.on("ready", createWindow);
