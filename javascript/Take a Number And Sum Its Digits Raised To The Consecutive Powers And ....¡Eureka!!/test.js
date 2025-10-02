const sumDigPow = require('./main')
const cases = [
    [1, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    [1, 1, [1]],
    [90, 100,  []],
    [24, 25,  []],
    [1, 100,  [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]],
];

test.each(cases)(
    'sumDigPow(%d,%d) should return %d',
    (input1, input2, expected) => {
        const result = sumDigPow(input1, input2);
        expect(result).toEqual(expected);
    }
);
