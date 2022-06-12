//
// Created by carlo on 6/12/22.
//

#ifndef COMPRESSION_ALGORITHMS_CLI_PROGRAM_H
#define COMPRESSION_ALGORITHMS_CLI_PROGRAM_H
#include <iostream>
using namespace std;

class CLIProgram {

    static void errorProgram(string message);

    static int finishedProgram(int output);

public:
    static void start(int argc, char* argv[]);
};


#endif //COMPRESSION_ALGORITHMS_CLI_PROGRAM_H
