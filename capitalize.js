function capitalize(s,arr){
  return "";
};

/*
O: string
I: string + array of nums
C: linear
E:
'abcdef', [1, 2, 5] => 'aBCdeF'
'abcdef', [1, 2, 5, 100] => 'aBCdeF'
'aaa', [0, 0, 0] => 'Aaa'
'AAA', [0, 0, 0] => 'AAA'
'aaa', [2] => 'aaA'
'aaa', [100, 200, 300] => 'aaa'
'aaa', [5000, 100, 1] => 'aAa'

*/