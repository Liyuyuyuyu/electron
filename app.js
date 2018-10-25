const {
    app,
    BrowserWindow
} = require('electron')

let mainWindow;

function creatWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL('file:/../index.html');
    mainWindow.webContents.openDevTools();
    mainWindow.on('close', () => {
        mainWindow = null;
    });
    mainWindow.on('resize', () => {
        mainWindow.reload();
    })
}
app.on('ready', creatWindow);
app.on('window-all-closed', () => {
    qpp.quit();
});
app.on('active', () => {
    if (win = null) {
        creatWindow();
    }
})