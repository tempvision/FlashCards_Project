const checkIfTrue = function() {
  return function(id) {
    console.log('cheking');
    if (questionMap.get(id)) console.log('true');
    else console.log('false');
  };
};

export { checkIfTrue };
