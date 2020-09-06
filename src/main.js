const { app, BrowserWindow } = require('electron')

function createWindow () {   
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })

  // 并且为你的应用加载index.html
  win.loadURL('https://music.163.com/')
}

app.whenReady().then(createWindow)