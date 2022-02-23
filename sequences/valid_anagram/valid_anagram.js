/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //Using Sort
    if (s.length === t.length) {
        sortedS = s.split("").sort().join("")
        sortedT = t.split("").sort().join("")

        for(i = 0; i < s.length; i++) {
            if(sortedS[i] != sortedT[i]) {
                return false
            }
        } return true
    } return false
};