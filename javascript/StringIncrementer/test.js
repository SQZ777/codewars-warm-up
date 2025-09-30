const incrementString = require('./main')
const cases = [
    ['foo', 'foo1'],
    ['foo1', 'foo2'],
    ['foobar23', 'foobar24'],
    ['foo9', 'foo10'],
    ['foo099', 'foo100'],
    ['foo0099', 'foo0100'],
    ['foo0099', 'foo0100'],
    ["foobar000", "foobar001"],
    ["foobar999", "foobar1000"],
    ["foobar00999", "foobar01000"],
];

test.each(cases)(
    'incrementString(%s) should return %s',
    (input, expected) => {
        const result = incrementString(input);
        expect(result).toBe(expected);
    }
);
