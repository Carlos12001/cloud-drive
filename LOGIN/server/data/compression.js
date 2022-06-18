const fs = require("fs");
const {exec} = require("child_process");
const Compression = {}

function callCompression(pathFile, typeCompression){
    exec("cd data && ls -a", (error, stdout, stderr) => {
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

function compress(pathFile, dataFile, typeCompression){
    fs.writeFile("./"+pathFile, dataFile, (err)=>{
        if (err){
            console.log(err);
        }
        else{
            callCompression(pathFile, typeCompression);
        }
    } );
}

Compression.compress =  compress;

module.exports = Compression;