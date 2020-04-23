function add(...num) {
  return num.reduce((prev, cur) => {
    return (prev + cur);
  });
}

function multiply(...num) {
    return num.reduce((prev, cur) => {
      return (prev * cur);
    });
  }

module.exports = {add,multiply}