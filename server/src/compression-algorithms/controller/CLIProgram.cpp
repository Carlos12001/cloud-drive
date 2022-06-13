#include "CLIProgram.h"

static vectorStructure <string> split(string str, char delimiter) {
    vectorStructure<string> internal;
    stringstream ss(str); // Turn the string into a stream.
    string tok;

    while (getline(ss, tok, delimiter)) {
        internal.addElement(tok);
    }

    return internal;
}

void CLIProgram::start(int argc, char **argv) {
    cout << "--------------Welcome to compression files--------------\n";

    if(argc != 4){
        errorProgram("no operation specified");
        finishedProgram(-1);
    }

    cout << "Type of compression:\n" << argv[1] << endl;
    cout << "Option compress:\n" << argv[2] << endl;
    cout << "Path file to compress:\n" << argv[3] << endl;

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

    //Read file
    std::string line;
    std::ifstream fileRead;
    vectorStructure< std::string > lines;
    try{
        fileRead.open(string(argv[3]), ios::in);
        if (fileRead.is_open()) {
            while (getline(fileRead, line)) {
                cout << line << endl;
                if(line!="") {lines.addElement(line);}
                optionCompression = optionMode++;
                optionMode = optionCompression++;
            }
            fileRead.close();
        } else {
            throw 505;
        }
    }
    catch (...) {
        errorProgram("we couldn't open the file with path: " + string(argv[3]));
        finishedProgram(-1);
    }

    //Do the final path
    string pathFinal = string(argv[3]);
    vectorStructure<string> splitedPath = split(string(argv[3]), '.');
    string extension =splitedPath.size() >= 1 ? splitedPath.getElement(splitedPath.size()-1) : "";
    if(extension=="lz77" || extension=="lz78" || extension=="lzw" || extension=="huffman"){
        splitedPath.pop();
        pathFinal = "";
        for(int i = 0; i < splitedPath.size(); i++){
            if(i==splitedPath.size()-1 && i!=0){
                pathFinal += ".";
            }
            pathFinal += splitedPath.getElement(i);
        }
    }
    else{
        pathFinal += "." + string(argv[1]);
    }

//    //Write File
//    std::ofstream fileWrite;
//    try{
//        fileWrite.open(string(argv[3]), ios::out);
//        if (fileWrite.is_open()) {
//
//            fileWrite.close();
//        } else {
//            throw 505;
//        }
//    }
//    catch (...) {
//        errorProgram("we couldn't open the file with path: " + string(argv[3]));
//        finishedProgram(-1);
//    }

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
        case 1:
            result = LZ77().encode(message);
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
        case 1:
            result = LZ77().decode(message);
            break;
        default:
            result = message;
            break;
    }
    return result;
}

string CLIProgram::doOptionChosen(const string &message, int optionMode, int optionCompression){
    string result = message;

    switch (optionMode){
        case 1:
            result = doCompression(message, optionCompression);
            break;
        case 2:
            result = doDecompression(message, optionCompression);
            break;
        default:
            errorProgram("switch case option mode was failed");
            result = message;
            break;
    }
    return result;
}
