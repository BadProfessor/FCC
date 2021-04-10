let funModule = (() => {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => {
        return true;
      };
    },
    singMixin: obj => {
      obj.sing = () => {
        console.log('Singing to an awesome tune');
      };
    }
  };
})();