const convertHTML = str => {
  // Split by character to avoid problems.

  let temp = str.split('');

  for (let i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;

      default:
        break;
    }
  }

  temp = temp.join('');
  return temp;
};

convertHTML('Dolce & Gabbana');
console.log(convertHTML('Dolce & Gabbana'));
