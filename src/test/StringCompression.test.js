 import compress from '../logic/StringCompression';
 
 let input = [
    [""         , ""],
    ["a"        , "a"],
    ["ab"       , "ab"],
    ["aabb"     , "a2b2"],
    ["aaa"      , "a3"],
    ["aabbbbc"  , "a2b4c1"]
 ];

 test.each(input)("%s => %s", (uncompressed, compressed) => {
     expect(compress(uncompressed)).toBe(compressed);
 });
