import { app, BrowserWindow } from "electron";
import path from "path";
import { isDev } from "./util.js";

const createWindow = (dev = false) => {
  const win = new BrowserWindow({
    // width: 800,
    // height: 600,
  });
  if (dev) {
    win.loadURL("http://localhost:5123");
  } else {
    win.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
};

app.on("ready", () => {
  if (isDev()) {
    createWindow(true);
  } else {
    createWindow();
  }
});
