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

        const newAcc = addNewHead(getFirst(elements), acc);
        const rest = getRestOfList(elements);

        return iter(rest, newAcc); 
    };


    return iter(list, makeList());
};


//recieve list and element, return new list with element as a head
const addNewHead = (element, list) => makePair(element, list);

const concatLists = (list1, list2) => {
    if (isEmpty(list1)) {
        return list2;
    }

    return addNewHead(
        getFirstNode(list1),
        concatLists(getRestOfList(list1), list2),
    );
};

const map = (func, list) => {
    if (isEmpty(list)) {
        return makeList();
    }

    const newElement = func(getFirstNode(list));
    return addNewHead(newElement, map(func, getRestOfList(list)));
};

const filter = (predicat, list) => {
    if (isEmpty(list)) {
        return makeList();
    }

    const element = getFirstNode(list);
    const rest = getRestOfList(list);

    if (predicat(element)) {
        return addNewHead(element, filter(predicat, rest));
    }

    return filter(predicat, rest);
};

export { 
    makeNode,
    makeList,
    getFirstNode,
    getRestOfList,
    isEmpty,
    has,
    reverse,
    addNewHead,
    concatLists,
    map,
    filter,
};
