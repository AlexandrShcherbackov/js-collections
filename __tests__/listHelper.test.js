import {
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
} from '../src/helpers/listHelper'

const list = makeList(1, 2, 3, 4);

describe('Basic list\'s asbstractions test', () => {
    it('Do list constructor and getters work?', () => {
        expect(getFirstNode(list)).toBe(1);
        expect(getRestOfList(list)).toEqual(makeList(2,3,4))
    });

    it('Does function isEmpty work', () => {
        expect(isEmpty(list)).toBeFalsy();
        expect(isEmpty(makeList())).toBeTruthy();
    });

    it('Does function has work', () => {
        expect(has(list, 1)).toBeTruthy();
        expect(has(list, 3)).toBeTruthy();
        expect(has(list, 10)).toBeFalsy();
    });

    it('Does reverse work', () => {
        expect(reverse(list)).toEqual(makeList(4, 3, 2, 1));
        expect(reverse(makeList())).toEqual(makeList());
    });

    it('Does addNewHead work', () => {
        expect(addNewHead(0, list)).toEqual(makeList(0, 1, 2, 3, 4));
        expect(addNewHead(0, makeList())).toEqual(makeList(0));
    });

    it('Does concatLists work', () => {
        const list2 = makeList(5, 6, 7, 8);
        expect(concatLists(list, list2)).toEqual(makeList(1, 2, 3, 4, 5, 6, 7, 8));
    });

    it('Does map is work', () => {
        const list2 = makeList(2, 3, 4, 5);
        const increment = (x) => x + 1;
        expect(map(increment, list)).toEqual(list2);
    });

    it('Does filter work', () => {
        const list2 = makeList(2, 4);
        const predicat = (el) => el % 2 === 0 ? true : false; 
        expect(filter(predicat, list)).toEqual(list2);
    });
});