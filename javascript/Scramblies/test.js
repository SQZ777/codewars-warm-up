const scramble = require('./main')
const cases = [
    ['foo', 'foo1', false],
    ['rkqodlw', 'world', true],
    ['cedewaraaossoqqyt', 'codewars', true],
    ['katas', 'steak', false],
    ['javscripts', 'javascript', false],
    ['jscripts', 'javascript', false],
    ['aabbcamaomsccdd', 'commas', true],
    ['commas', 'commas', true],
    ['sammoc', 'commas', true],
    ['scriptjavx', 'javascript', false],
    ['scriptingjava', 'javascript', true],
];

test.each(cases)(
    'scramble(%s, %s) should return %s',
    (str1, str2, expected) => {
        const result = scramble(str1, str2);
        expect(result).toBe(expected);
    }
);
