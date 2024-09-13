function isPalindrome(word) {
    let leftIndex = 0;
    let rightIndex = word.length - 1;

    while (leftIndex < rightIndex) {
         
        if (word[leftIndex] !== word[rightIndex]) {
            return false; 
        }
        leftIndex++;
        rightIndex--;
    }

    return true; 
}
let input = "racdhdecar";
isPalindrome(input);
console.log(isPalindrome(input));


