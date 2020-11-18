// const palindrome = str => {
//   return (
//     str.replace(/[\W_]/g, '').toLowerCase() ===
//     str
//       .replace(/[\W_]/g, '')
//       .toLowerCase()
//       .split('')
//       .reverse()
//       .join('')
//   );
// }

const palindrome = str => {
  str = str.toLowerCase().replace(/[\W_]/g, '');

  for (let i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) return false;
  }

  return true;
};

palindrome('eye');
console.log(palindrome('eye'));
console.log(palindrome('listen'));
