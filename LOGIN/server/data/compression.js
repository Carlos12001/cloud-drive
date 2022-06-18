const fs = require("fs");
const {exec} = require("child_process");
const {func} = require("joi");
const Compression = {}

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


function deleteFiles(){
    exec("cd data && rm -v !(compression.js|compression-algorithms)", (error, stdout, stderr) => {
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
    let result = "None";
    fs.writeFile("./data/"+pathFile, dataFile, (err)=>{
        if (err){
            console.log(err);
        }
        else{
            callCompression(pathFile, typeCompression);
        }
    } );

    fs.readFile("./data/"+pathFile+"."+typeCompression,(err, buffer)=>{
        if(err){
            result = "None";
        }
        else{
            result = buffer.toString();
        }
    })

    return result;
}

Compression.compress =  compress;

module.exports = Compression;