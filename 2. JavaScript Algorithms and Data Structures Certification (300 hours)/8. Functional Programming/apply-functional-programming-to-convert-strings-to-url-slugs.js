let mainTitle = 'Cable Guy';

// Only change code below this line
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== '';
    })
    .join('-')
    .toLowerCase();
};

// Only change code above this line

let sluggedTitle = urlSlug(mainTitle);

console.log(sluggedTitle);
