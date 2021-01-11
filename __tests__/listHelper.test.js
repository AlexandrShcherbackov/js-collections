import { makeList, getFirstNode, getRestOfList } from '../src/helpers/listHelper'

describe('Basic lists test', () => {
    test('are our functions work?', () => {
        const list = makeList(1,2,3,4);
        expect(getFirstNode(list)).toBe(1);
        expect(getRestOfList(list)).toEqual(makeList(2,3,4))
    });


});