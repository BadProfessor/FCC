function rot13(str) {
  return str
    .split('')
    .map.call(str, function(char) {
      const x = char.charCodeAt(0);
      if (x < 65 || x > 90) return String.fromCharCode(x);
      else if (x < 78) return String.fromCharCode(x + 13);

      return String.fromCharCode(x - 13);
    })
    .join('');
}

rot13('SERR PBQR PNZC');
console.log(rot13('SERR PBQR PNZC'));
