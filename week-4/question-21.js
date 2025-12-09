
    // Author: SakinaEbrahimi
    // Description: Longest Palindromic substring
    //input: babad => bab or aba


function longestPalindrom(str){
    if(typeof str !== 'string' || str === null || str === undefined) throw new Error('invalid input')

    let arr = []   
   for(i=0; i<str.length;i++){
        left = i-1;
        right = i + 1;
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            arr.push(str.slice(left, right + 1))
            left--;
            right++;
        }
   }
   return arr[arr.length-1]
}

module.exports = longestPalindrom