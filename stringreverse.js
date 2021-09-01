const stringReverse = (str) => {
    if (str.length < 1 || str.length > 10) {
      return Error;
    }
    return str.split('').reverse().join('');
};
  
module.exports = stringReverse;