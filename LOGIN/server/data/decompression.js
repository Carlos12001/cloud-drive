const fs = require("fs");
const {exec} = require("child_process");
const {func} = require("joi");
const delay = ms => new Promise(res => setTimeout(res, ms));
const Decompression = {}

/**
 *
 * @param pathFile
 * @param typeDecompression
 * descomprime el archivo dado mediante un path y tipo de decompression
 */
function callDecompression(pathFile, typeDecompression){
    exec("cd data && ./compression-algorithms " + typeDecompression + " decode "+ pathFile + "." + typeDecompression, (error, stdout, stderr) => {
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

//
// function deleteFiles(path,typeDecompression){
//     exec("cd data && rm " + path + " " + path + "." + typeDecompression, (error, stdout, stderr) => {
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

async function decompress(pathFile, dataFile, typeDecompression, callback) {
    let result = "None";
    let flag = true;
    fs.writeFile("./data/" + pathFile + "." + typeDecompression, dataFile, (err) => {
        if (err) {
            console.log(err);
        } else {
            callDecompression(pathFile, typeDecompression);
            flag = false;
        }
    });
    await delay(10);
    fs.readFile("./data/" + pathFile, (err, buffer) => {
        if (err) {
            console.log(err);
            callback("None Failed Read");
        } else {
            callback(buffer.toString());
        }
    });
}

Decompression.decompress =  decompress;

module.exports = Decompression;