/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str = x.toString();
    const array = str.split("")
    const reverseArray = array.reverse();
    const reverseNum = reverseArray.join("");
    
    if (str === reverseNum) {
        return true
    } else {
        return false
    }
};