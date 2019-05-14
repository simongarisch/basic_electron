const openBtn = document.getElementById("openBtn");
const shell = require("electron").shell;  // used to open the file system or a url in default browser


openBtn.addEventListener("click", function(event){
    shell.showItemInFolder("C:\\");  // to open file explorer
    //shell.openItem(full_path)  // to open a file
    shell.openExternal("http://electron.atom.io");  // open external link
})
