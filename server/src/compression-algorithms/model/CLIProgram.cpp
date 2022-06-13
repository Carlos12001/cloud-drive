#include "CLIProgram.h"


void CLIProgram::start(int argc, char **argv) {
    cout << "--------------Welcome to compression files--------------\n";

    if(argc != 4){
        errorProgram("no operation specified");
        finishedProgram(-1);
    }

    cout << "Type of compression: " << argv[1] << endl;
    cout << "Option compress: " << argv[2] << endl;
    cout << "Path file to compress: " << argv[3] << endl;

    int optionCompression = -1;
    if (string (argv[1]) == "lz77"){
        optionCompression = 1;
    }
    else if (string (argv[1]) == "lz78"){
        optionCompression = 2;
    }
    else if (string (argv[1]) == "lzw"){
        optionCompression = 3;
    }
    else if (string (argv[1]) == "huffman"){
        optionCompression = 4;
    }
    else{
        errorProgram("the second option only can be\nlz77\nlz78\nlzw\nhuffman");
        finishedProgram(-1);
    }

    int optionMode = -1;
    if (string (argv[2]) == "encode"){
        optionMode = 1;
    }
    else if (string (argv[1]) == "decode"){
        optionMode = 2;
    }
    else{
        errorProgram("the second option only can be\nencode\ndecode");
        finishedProgram(-1);
    }

    //    try{}
//    catch (...) {}
    //read file

    string text = "Hola como estas";

    switch (optionMode){
        case 1:
            doCompression(text, optionCompression);
            break;
        case 2:
            doDecompression(text, optionCompression);
            break;
        default:
            errorProgram("switch case failed");
            finishedProgram(-1);
    }

    finishedProgram(0);
    return;
}

void CLIProgram::finishedProgram(int output) {
    cout << "--------------Finish program--------------\n";
    exit(output);
}

void CLIProgram::errorProgram(const string& message) {
    cerr << "\nerror:\n";
    cout<<message<<endl;
}

string CLIProgram::doCompression(const string &message, int typeCompression) {
    string result = message;
    switch (typeCompression) {
        case 0:
//            result = LZ77().encodeFile(message);
            break;
        default:
            result = message;
            break;
    }
    return result;
}

string CLIProgram::doDecompression(const string &message, int typeCompression) {
    string result = message;
    switch (typeCompression) {
        case 0:
//            result = LZ77().decodeFIle(message);
            break;
        default:
            result = message;
            break;
    }
    return result;
}
