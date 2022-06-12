//
// Created by carlo on 6/12/22.
//

#ifndef COMPRESSION_ALGORITHMS_COMPRESSION_H
#define COMPRESSION_ALGORITHMS_COMPRESSION_H
#include <iostream>
using namespace std;

class Compression {
public:
    virtual void encodeFile(string path) = 0;

    virtual void decodeFIle(string path) = 0;
};


#endif //COMPRESSION_ALGORITHMS_COMPRESSION_H
