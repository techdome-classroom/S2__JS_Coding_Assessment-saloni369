/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    function romanToInt(s) {
        let map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
        let total = 0;
    
        for (let i = 0; i < s.length; i++) {
            let current = map[s[i]];
            let next = map[s[i + 1]];
    
            if (next && current < next) {
                total -= current;
            } else {
                total += current;
            }
        }
    
        return total;
    }
    
    console.log(romanToInt("III"));     // Output: 3
    console.log(romanToInt("LVIII"));   // Output: 58
    console.log(romanToInt("MCMXCIV")); // Output: 1994
    
    
};


module.exports={romanToInt}