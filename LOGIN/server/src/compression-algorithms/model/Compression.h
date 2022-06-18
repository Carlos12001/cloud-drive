//
// Created by carlo on 6/12/22.
//

#ifndef COMPRESSION_ALGORITHMS_COMPRESSION_H
#define COMPRESSION_ALGORITHMS_COMPRESSION_H
#include <iostream>
using namespace std;

class Compression {
public:
    virtual string encode(const string& text) = 0;

    virtual string decode(const string& text) = 0;
};


#endif //COMPRESSION_ALGORITHMS_COMPRESSION_H
