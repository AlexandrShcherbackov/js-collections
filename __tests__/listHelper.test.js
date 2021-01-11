import { makeList, getFirstNode, getRestOfList, isEmpty, has, reverse } from '../src/helpers/listHelper'

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
});