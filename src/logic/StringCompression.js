const compress = (uncompressed) => {
    let compressor = (accumulator, current) => {
        if(accumulator.character === null) {
            accumulator.character = current;
        }
        if(accumulator.character === current) {
            accumulator.count++;
        } else {
            accumulator.compressed += (accumulator.character + accumulator.count);
            accumulator.character = current;
            accumulator.count = 1;
        }
        return accumulator;
    };
    let result = [...uncompressed].reduce(compressor, { character: null, count: 0, compressed: "" });
    let compressed = result.compressed + result.character + result.count;

    return (compressed.length > uncompressed.length) ? uncompressed : compressed; 
};

export default compress;
