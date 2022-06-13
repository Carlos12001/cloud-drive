//
// Created by carlo on 6/12/22.
//

#include "LZW.h"

#include <iostream>
#include <string>
#include <vector>
#include <sstream>

using namespace std;

struct NodeLZW{
    int index;
    string data;
    NodeLZW *next;
};


static void st_Node(NodeLZW *head, int index, string data){
    head->index = index;
    head->data = data;
    head->next = NULL;
}

static void insert_Node(NodeLZW *head, int index, string data){
    NodeLZW *new_Node = new NodeLZW;
    new_Node->index = index;
    new_Node->data = data;
    new_Node->next = NULL;

    NodeLZW *curr = head;
    while (curr != NULL)
    {
        if (curr->next == NULL)
        {
            curr->next = new_Node;
            return;
        }
        curr = curr->next;
    }
}

static NodeLZW *search_Node(NodeLZW *head, string data)
{
    NodeLZW *curr = head;
    while (curr != NULL)
    {
        if (data.compare(curr->data) == 0)
            return curr;
        else
            curr = curr->next;
    }
    return NULL;
}

static NodeLZW *search_Node(NodeLZW *head, int index)
{
    NodeLZW *curr = head;
    while (curr != NULL)
    {
        if (index == curr->index)
            return curr;
        else
            curr = curr->next;
    }
    return NULL;
}

static vector <string> split(string str, char delimiter) {
    vector<string> internal;
    stringstream ss(str); // Turn the string into a stream.
    string tok;

    while (getline(ss, tok, delimiter)) {
        internal.push_back(tok);
    }

    return internal;
}

string LZW::encode(const string &text) {

    string input = text;
    NodeLZW *dictionary = new NodeLZW;
    string result;
    int length, last_seen, index = 128;

    st_Node(dictionary, 32, " ");
    for (int i = 33; i < 128; i++)
    {
        string data;
        data = i;
        insert_Node(dictionary, i, data);
    }

    length = (int)input.length();

    for (int i = 0; i < length; i++)
    {
        NodeLZW *searched;
        string search;
        search = input[i];

        re_search:
        searched = search_Node(dictionary, search);
        if (searched)
        {
            i++;
            search += input[i];
            last_seen = searched->index;
            if (i != length)
                goto re_search;
            else
                goto print;
        }
        else
        {
            insert_Node(dictionary, index, search);
            index++;
            print:
            result += to_string(last_seen) + " ";
            i--;
        }
    }

    return result;
}

string LZW::decode(const string &text) {
    string input = text;



    NodeLZW *dictionary = new NodeLZW;
    string result;
    int index = 128;

    st_Node(dictionary, 32, " ");
    for (int i = 33; i < 128; i++)
    {
        string data;
        data = i;
        insert_Node(dictionary, i, data);
    }

    vector <string> s_input = split(input, ' ');
    int size =  s_input.size();
    for (int i = 0; i < size; i++)
    {
        NodeLZW *searched;
        int search;
        search = stoi(s_input[i]);

        searched = search_Node(dictionary, search);

        string cur, prev, data;
        if (searched)
            cur = search_Node(dictionary, stoi(s_input[i]))->data;
        if (i != 0)
            prev = search_Node(dictionary, stoi(s_input[i - 1]))->data;
        else
            prev = cur;

        int show = 0;
        if (searched)
        {
            result += searched->data;

            if (i != 0)
            {
                data = prev + cur[0];
                if (show != 1)
                {
                    insert_Node(dictionary, index, data);
                    index++;
                }
            }
            show = 0;
        }
        else
        {
            data = prev + prev[0];
            insert_Node(dictionary, index, data);
            index++;
            show = 1;
            result += data;
        }
    }

    return result;

}
