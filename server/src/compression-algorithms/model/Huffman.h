//
// Created by carlo on 6/12/22.
//

#ifndef COMPRESSION_ALGORITHMS_HUFFMAN_H
#define COMPRESSION_ALGORITHMS_HUFFMAN_H
#include "Compression.h"
// C++ program to encode and decode a string using
// Huffman Coding.
#include <bits/stdc++.h>
#define MAX_TREE_HT 256
using namespace std;

// A Huffman tree node
struct MinHeapNode
{
    char data;             // One of the input characters
    int freq;             // Frequency of the character
    MinHeapNode *left, *right; // Left and right child

    MinHeapNode(char data, int freq)
    {
        left = right = NULL;
        this->data = data;
        this->freq = freq;
    }
};

// utility function for the priority queue
struct compare
{
    bool operator()(MinHeapNode* l, MinHeapNode* r)
    {
        return (l->freq > r->freq);
    }
};

class Huffman : public Compression{
    // to map each character its huffman value
    map<char, string> codes;


// STL priority queue to store heap tree, with respect to their heap root node value
    priority_queue<MinHeapNode*, vector<MinHeapNode*>, compare> minHeap;

// to store the frequency of character of the input data
    map<char, int> freq;
public:
    string encode(const string& text) override;

    string decode(const string& text) override;
};


#endif //COMPRESSION_ALGORITHMS_HUFFMAN_H
