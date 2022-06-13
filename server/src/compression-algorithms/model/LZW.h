//
// Created by carlo on 6/12/22.
//

#ifndef COMPRESSION_ALGORITHMS_LZW_H
#define COMPRESSION_ALGORITHMS_LZW_H
#include "Compression.h"

class LZW : public Compression{
public:
    string encode(const string& text) override;

    string decode(const string& text) override;
};


#endif //COMPRESSION_ALGORITHMS_LZW_H
