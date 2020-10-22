String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str) {
  let newTitle = str.split(' ');

  let updatedTitle = [];

  for (const st in newTitle) {
    updatedTitle[st] = newTitle[st]
      .toLowerCase()
      .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(' ');
}

titleCase("I'm a little tea pot");
console.log(titleCase("I'm a little tea pot"));
