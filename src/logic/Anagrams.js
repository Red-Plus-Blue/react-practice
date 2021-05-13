
const areAnagrams = (first, second) => {
    first = first.toLowerCase().replace(/ /g, "");
    second = second.toLowerCase().replace(/ /g, "");

    let characters = {};

    [...first].forEach(character => { 
        if(!characters[character]) {
            characters[character] = 1;
            return;
        }
        characters[character]++;
    });

    [...second].forEach(character => {
        if(!characters[character]) {
            characters[character] = -1;
            return;
        }
        characters[character]--;
    });

    return Object
        .keys(characters)
        .filter(character => characters[character] !== 0)
        .length === 0;

};

export default areAnagrams;