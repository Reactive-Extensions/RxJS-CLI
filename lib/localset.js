function LocalSet(values) {
  this.__set__ = [];
  if (values) {
    for (var i = 0, len = values.length; i < len; i++) {
      this.add(values[i]);
    }
  }
}

Object.defineProperties(LocalSet.prototype, {
  add: { 
    value: function (value) {
      if (!this.has(value)) {
        this.__set__.push(value);
        return true;
      } else {
        return false;
      }
    }
  },
  has: {
    value: function (value) {
      return this.__set__.indexOf(value) !== -1;
    }
  },
  delete: {
    value: function (value) {
      var idx = this.__set__.indexOf(value);
      if (idx === -1) { return false; }
      delete this.__set__[idx];
      return true;
    }
  },
  values: {
    value: function () {
      var result = [];
      this.__set__.forEach(function (v) {
        result.push(v);
      });
      return result;
    }
  }
});

module.exports = LocalSet;