const capitalize = (string) => {
    if(string === null || string === Number) {
      return Error;
    } else {
      const firstChar = string.split('').slice(0, 1).join().toUpperCase();
      const restString = string.split('').slice(1).join('').toLowerCase();
      const capitalized = firstChar + restString;
      return capitalized;
    }
  
  };
  
  module.exports = capitalize;