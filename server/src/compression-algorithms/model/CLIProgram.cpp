#include "CLIProgram.h"


void CLIProgram::start(int argc, char **argv) {
    cout << "--------------Welcome to compression files--------------\n";

    if(argc != 3){
        errorProgram("no operation specified");
        finishedProgram(-1);
    }

    cout << "Type of compression: " << argv[1] << endl;


    cout << "Path file to compress: " << argv[2] << endl;

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
