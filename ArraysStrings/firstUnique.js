const firstUniqChar = function(s) {
  var hash = {};
  for( var i=0; i<s.length; i++ ){
      if( hash[ s[i] ] === undefined ){
        hash[s[i]] = [i,1];
} else {
    hash[ s[i] ][1] += 1;
    }
  }

  for ( var j in hash ) {
    if( hash[j][1] === 1 ) return hash[j][0];
  }
  return -1
};
