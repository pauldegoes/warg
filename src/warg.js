(function() {
  function foldl(a, init, f) {
    var result = init;
    foreach(a, function(v) {
      result = f(result, v);
    });
    return result;
  };
  function map(a, f) {
    var result = [];
    foreach(a, function(v) {
      result.push(f(v));
    });
    return result;
  };
  function filter(a, f) {
    return foldl(a, [], function(init, v) {
      return f(v) ? append(init, v) : init; 
    });
  };
  function foreach(a, f) {
    for (var i=0; i < a.length; i++) {
      f(a[i], i);
    }
  };
  function append(a, v) {
    a.push(v);
    return a;
  };
  
  Array.prototype.foldl   = function(i, v)  { return foldl(this, i, v); };
  Array.prototype.map     = function(f)     { return map(this, f); };
  Array.prototype.filter  = function(f)     { return filter(this, f); };
  Array.prototype.foreach = function(f)     { return foreach(this, f); };
  Array.prototype.append  = function(v)     { return append(this, v); };
})()
