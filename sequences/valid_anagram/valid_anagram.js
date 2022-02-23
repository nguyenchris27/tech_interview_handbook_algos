/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Using Sort
var isAnagram = function (s, t) {
    if (s.length === t.length) {
        sortedS = s.split("").sort().join("")
        sortedT = t.split("").sort().join("")

        for (i = 0; i < s.length; i++) {
            if (sortedS[i] != sortedT[i]) {
                return false
            }
        } return true
    } return false
};

// Using Frequency Table
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let freqTable = {};

    for (i = 0; i < s.length; i++) {
        if (freqTable.hasOwnProperty(s[i])) {
            freqTable[s[i]]++;
        } else {
            freqTable[s[i]] = 1;
        }
    }

    for (j = 0; j < t.length; j++) {
        if (freqTable[t[j]]) {
            freqTable[t[j]]--;

            if (freqTable[t[j]] < 1) {
                delete freqTable[t[j]]
            }

        } else {
            return false;
        }
    } return true;
};
