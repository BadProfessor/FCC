function translatePigLatin(str) {
  const consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);

  return myConsonants !== null
    ? str
        .replace(consonantRegex, '')
        .concat(myConsonants)
        .concat('ay')
    : str.concat('way');
}

translatePigLatin('consonant');
console.log(translatePigLatin('consonant'));
