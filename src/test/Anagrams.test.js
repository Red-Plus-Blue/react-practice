import areAnagrams from '../logic/Anagrams';

let anagrams = [
    ["tar", "rat"],
    ["arc", "car"],
    ["elbow", "below"],
    ["state", "taste"],
    ["angel", "glean"],
    ["stressed", "desserts"]
];

test.each(anagrams)("%s and %s are anagrams", (first, second) => {
    expect(areAnagrams(first, second)).toBe(true);
});

let anagramsWithSpaces = [
    ["eleven plus two", "twelve plus one"],
    ["slot machines", "cash lost in me"],
    ["fourth of july", "joyful fourth"]
];

test.each(anagramsWithSpaces)("%s and %s are anagrams (spacing doesn't matter)", (first, second) => {
    expect(areAnagrams(first, second)).toBe(true);
});

let anagramsWithRandomCasing = [
    ["TaR", "RAt"],
    ["arc", "car"],
    ["eLBow", "bElOw"]
];

test.each(anagrams)("%s and %s are anagrams (casing doesn't matter)", (first, second) => {
    expect(areAnagrams(first, second)).toBe(true);
});

let notAnagrams = [
    ["Red", "Blue"],
    ["JavaScript", "CSharp"],
    ["Java", "JavaScript"],
    ["MySQL", "MongoDB"]
];


test.each(notAnagrams)("%s and %s are not anagrams", (first, second) => {
    expect(areAnagrams(first, second)).toBe(false);
});

