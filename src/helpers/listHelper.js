import { makePair, getFirst, getSecond } from '../helpers/pairsHelper'

const makeNode = (first, second) => makePair(first, second); 

//The list must be a sequential connection of elements 
//and have an end marker

// makeList recieve pairs and return list 
const makeList = (...data) => {
    const reversedData = data.reverse();
    const reducer = (acc, item) => makePair(item, acc);
    return reversedData.reduce(reducer, null);
};

// getFirstNode recieve list and return first node
const getFirstNode = (list) => getFirst(list);

const getRestOfList = (list) => getSecond(list);

const isEmpty = (list) => list === null;

// function has recive list and some element.
// Function check is element in list

const has = (list, element) => {
    if (isEmpty(list)) {
        return false;
    }

    const firstelement = getFirstNode(list);
    const rest = getRestOfList(list);

    return firstelement === element
        ? true
        : has(rest, element);
};

//recieve list and return reversed list
const reverse = (list) => {
    const iter = (elements, acc) => {
        if (isEmpty(elements)) {
            return acc;
        }

        const newAcc = addNewHead(acc, getFirst(elements));
        const rest = getRestOfList(elements);

        return iter(rest, newAcc); 
    };


    return iter(list, makeList());
};


//recieve list and element, return new list with element as a head
const addNewHead = (list, element) => makePair(element, list);


export { 
    makeNode,
    makeList,
    getFirstNode,
    getRestOfList,
    isEmpty,
    has,
    reverse,
    addNewHead,
};
