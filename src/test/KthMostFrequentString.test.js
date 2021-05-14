import kthMostFrequent from '../logic/KthMostFrequentString';

describe("Given a list and a value k, return the kth most frequent string", () => {

    const ties = [
        [["a", "b"]                     , 1],
        [["a", "b", "c"]                , 1],
        [["a", "a", "b", "b"]           , 1],
        [["c,", "d", "a", "a", "b", "b"], 1]
    ];

    test.each(ties)("Given a tie between most frequen then return null", (list, k) => {
        expect(kthMostFrequent(list, k)).toBe(null);
    });
    
    const kTooLarge = [
        [["a", "a", "b"]                , 3],
        [["a", "b"]                     , 2],
        [["a", "b"]                     , 1],
        [["a", "a", "a", "b", "b", "c" ], 4]
    ];

    test.each(kTooLarge)("Given k is larger than number of unique strings then return null", (list, k) => {
        expect(kthMostFrequent(list, k)).toBe(null);
    });

    const emptyList = [
        [0],
        [1],
        [2]
    ];
    
    test.each(emptyList)("Given an empty list then return null", (k) => {
        expect(kthMostFrequent([], k)).toBe(null);
    });

    const kTooSmall = [
        [0],
        [-1],
        [-5],
        [-10]
    ];
    
    test("Given a k < 1 then return null", (k) => {
        expect(kthMostFrequent(["a", "a", "b"], k)).toBe(null);
    });

    let input = [
        [["a"], 1, "a"],
        [["a", "a", "b"], 1, "a"],
        [["a", "a", "b"], 2, "a"],
        [["a", "b", "b"], 1, "b"],
        [["a", "b", "b"], 2, "a"],
        [["a", "a", "b", "b", "c"], 2, "c"],
        [["a", "a", "a", "b", "b", "c"], 2, "b"],
        [["a", "a", "a", "b", "b", "c"], 3, "c"],
    ];

    test.each(input)("Given a list with a kth most frequent string then return that string", (list, k, expected) => {
        expect(kthMostFrequent(list, k)).toBe(expected);
    });
});
