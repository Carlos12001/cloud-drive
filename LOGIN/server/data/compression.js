const fs = require("fs");
const {exec} = require("child_process");
const {func} = require("joi");
const Compression = {}

const delay = ms => new Promise(res => setTimeout(res, ms));
function callCompression(pathFile, typeCompression){
    exec("cd data && ./compression-algorithms " + typeCompression + " encode "+ pathFile, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}


// function deleteFiles(path,typeCompression){
//     exec("cd data && rm " + path + " " + path + "." + typeCompression, (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`stdout: ${stdout}`);
//     });
// }

async function compress(pathFile, dataFile, typeCompression, callback) {
    let result = "None";
    let flag = true;
    fs.writeFile("./data/" + pathFile, dataFile, (err) => {
        if (err) {
            console.log(err);
        } else {
            callCompression(pathFile, typeCompression);
            flag = false;
        }
    });
    await delay(10);
    fs.readFile("./data/" + pathFile + "." + typeCompression, (err, buffer) => {
        if (err) {
            console.log(err);
            callback("None Failed Read");
        } else {
            callback(buffer.toString());
        }
    });
}

Compression.compress =  compress;

module.exports = Compression;