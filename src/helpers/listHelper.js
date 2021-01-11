import { makePair, getFirst, getSecond } from '../helpers/pairsHelper'

const makeNode = (first, second) => makePair(first, second); 

//The list must be a sequential connection of elements 
//and have an end marker

// makeList recieve pairs and return list 
const makeList = (...data) => {
    const revresedData = data.reverse();
    const reducer = (acc, item) => makePair(item, acc);
    return revresedData.reduce(reducer, null);
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

export { makeNode, makeList, getFirstNode, getRestOfList, isEmpty, has };