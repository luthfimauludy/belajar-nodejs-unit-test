import {sum} from '../src/sum';

test ("test sum function", () => {
    const result  = sum()

    expect(result).toBe(3);
});