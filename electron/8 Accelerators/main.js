
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const globalShortcut = electron.globalShortcut;  // so we can run shortcut keys even when the app is out of focus

let win;

function createWindow(){
    win = new BrowserWindow({webPreferences: {
        nodeIntegration: true
    }});

    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }));

    win.on("closed", () => {
        win = null;
    })
}

// when electron.app is finished initialization 
// we are going to call createWindow 
app.on("ready", function(){
    createWindow();

    const template = [
        {
            label: "demo",
            submenu: [
                {
                    label: "submenu1",
                    click: function(){
                        console.log("Clicked submenu1");
                    }
                },
                {
                    type: "separator"
                },
                {
                    label: "submenu2",
                    click: function(){
                        console.log("Clicked submenu2");
                    }
                }
            ]
        },
        {
            label: "Help",
            submenu: [{
                label: "About electron",
                click: function(){
                    electron.shell.openExternal("http://electron.atom.io");
                },
                accelerator: "CmdOrCtrl + Shift + H"
            }]
        }/*,
        {
            lebel: "Edit",
            submenu: [
                {role: "undo"},
                {role: "redo"},
                {type: "separator"},
                {role: "cut"},
                {role: "copy"},
                {role: "paste"},
                {role: "pasteandmatchstyle"},
                {role: "delete"},
                {role: "selectall"}
            ]
        }*/
    ]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    const cxtMenu = new Menu();
    cxtMenu.append(new MenuItem({
        label: "Hello",
        click: function(){
            console.log("Context menu item clicked");
        }
    }))
    cxtMenu.append(new MenuItem({ role: "selectall" }));

    win.webContents.on("context-menu", function(event, params){
        cxtMenu.popup(win, params.x, params.y);
    })

    globalShortcut.register("Alt+1", function(){
        win.show();  // bring the focus to this window
    });
});


app.on("will-quit", function(){
    globalShortcut.unregisterAll();
})