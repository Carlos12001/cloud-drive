//
// Created by carlo on 6/12/22.
//

#ifndef COMPRESSION_ALGORITHMS_CLI_PROGRAM_H
#define COMPRESSION_ALGORITHMS_CLI_PROGRAM_H
#include <iostream>
using namespace std;
#include "compresion_h.h"
#include <fstream>
#include "vectorStructure.h"

class CLIProgram {

    static void errorProgram(const string& message);

    static void finishedProgram(int output);

    static string doCompression(const string& message, int typeCompression);

    static string doDecompression (const string& message, int typeCompression);

    static string doOptionChosen(const string &message, int optionMode, int optionCompression);

public:
    static void start(int argc, char* argv[]);
};


#endif //COMPRESSION_ALGORITHMS_CLI_PROGRAM_H
