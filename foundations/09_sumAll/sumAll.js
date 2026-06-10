const sumAll = function(a, b) {
  const array = []
  
  if (a < 0 || b < 0) {
    return 'ERROR'
  } if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return 'ERROR'
  }

  for (let i = a < b ? a : b; a < b ? i <= b : i <= a; i++) {
    array.push(i)
  }

  return array.reduce((acc, curr) => acc + curr, 0)
};

// Do not edit below this line
module.exports = sumAll;
