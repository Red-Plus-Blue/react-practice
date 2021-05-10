const mapping = [
    (string) => string.replace(/IIIII/g, 'V'),
    (string) => string.replace(/IIII/g, 'IV'),
    (string) => string.replace(/VV/g, 'X'),
    (string) => string.replace(/VIV/g, 'IX'),
    (string) => string.replace(/XXXXX/g, 'L'),
    (string) => string.replace(/LXXXX/g, 'XC'),
    (string) => string.replace(/XXXX/g, 'XL'),
    (string) => string.replace(/LL/g, 'C')
];

function convert(decimal) {
    let numerals = "I".repeat(decimal);
    mapping.forEach(operation => numerals = operation(numerals));
    return numerals;
}

export default convert;