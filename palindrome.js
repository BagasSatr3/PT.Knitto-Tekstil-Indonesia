function isPalindrome(n) {
  let j = n.length - 1;
  for (let i = 0; i < n.length; i++) {
    if (n[i] != n[j]) {
      return false;
    }
    j--;
  }
  return true;
}

let kata1 = "nitin";
let kata2 = "adalalada";
let kata3 = "normal";

console.log(isPalindrome(kata1));
console.log(isPalindrome(kata2));
console.log(isPalindrome(kata3));
