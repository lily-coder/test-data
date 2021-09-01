const stringlength = (str) => {
    if (str.length < 1 || str.length > 10) {
      return Error;
    }
    return str.length;
};

module.exports = stringlength;