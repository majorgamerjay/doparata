const Colors = require('./Colors');

function logOutput (type="none",
    message,
    bool_fs=false,
    path="doparata.log") {

    const fs = require('fs');
    let msg = "";

    if (bool_fs)
        fs.writeFile(path, '', err => { if (err) console.log(err) });

    switch (type) {
        case "INFO":
            console.log(`${Colors.coloredOutput("CYAN", "INFO > ")} ${message}`);
            if (bool_fs) fs.appendFile(path, `[INFO] ${message}`, err => { if (err) console.log(err) })
            break;
        case "WARN":
            console.log(`${Colors.coloredOutput("YELLOW", "WARN > ")} ${message}`);
            if (bool_fs) fs.appendFile(path, `[WARN] ${message}`, err => { if (err) console.log(err) })
            break;
        case "ERR":
            console.log(`${Colors.coloredOutput("RED", "ERR > ")} ${message}`);
            if (bool_fs) fs.appendFile(path, `[ERR] ${message}`, err => { if (err) console.log(err) })
            break;
        case "SUCC":
            console.log(`${Colors.coloredOutput("GREEN", "SUCCESS > ")} ${message}`);
            if (bool_fs) fs.appendFile(path, `[SUCCESS] ${message}`, err => { if (err) console.log(err) })
            break;
    }
}

module.exports = {
    logOutput : logOutput
};
