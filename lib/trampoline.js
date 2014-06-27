var toString = Object.prototype.toString();

function trampoline(fun /*, args */) {
  var result = fun.apply(fun, [].slice.call(arguments, 1));

  while (toString.call(result) === 'object Function') {
    result = result();
  }

  return result;
};

module.exports = trampoline;