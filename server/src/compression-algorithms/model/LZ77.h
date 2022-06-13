//
// Created by carlo on 6/12/22.
//

#ifndef COMPRESSION_ALGORITHMS_LZ77_H
#define COMPRESSION_ALGORITHMS_LZ77_H

#include "Compression.h"
#include <iostream>
using namespace std;
#include <string>
#include <vector>
#include <sstream>

class LZ77 : public Compression{
public:
    string encodeFile(const string& text) override;

    string decodeFIle(const string& text) override;
};


#endif //COMPRESSION_ALGORITHMS_LZ77_H
