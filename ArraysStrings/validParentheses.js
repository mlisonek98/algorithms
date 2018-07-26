const isValid = function(s) {
  if(s.length == 0 ) return true;
  let store = [];
  for(let i=0; i < s.length; i++){
      if(s[i] == '('){
          store.push(s[i]);
      }else if(s[i] == '['){
          store.push(s[i]);
      }else if(s[i] == '{'){
          store.push(s[i]);
      }else if(s[i] == ')'){
          if(store.pop() != '(') return false;
      }else if(s[i] == ']'){
          if(store.pop() != '[') return false;
      }else if(s[i] == '}'){
          if(store.pop() != '{') return false;
      }
  }
  return store.length == 0;
};
