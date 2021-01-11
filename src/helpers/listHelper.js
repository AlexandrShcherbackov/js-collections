import { makePair, getFirst, getSecond } from '../helpers/pairsHelper'

const makeNode = (first, second) => makePair(first, second); 

// makeList recieve pairs and return list 
const makeList = (...data) => {
    const revresedData = data.reverse();
    const reducer = (acc, item) => makePair(item, acc);
    return revresedData.reduce(reducer, null);
};

// getFirstNode recieve list and return first node
const getFirstNode = (list) => getFirst(list);

const getRestOfList = (list) => getSecond(list);

export { makeList, getFirstNode, getRestOfList };