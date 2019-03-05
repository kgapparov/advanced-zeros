module.exports = function getZerosCount(number, base) {
  // your implementation
  zeroConditionNumber = getdevider(base);
  count = -1;
  for (j = zeroConditionNumber; (number/j) > 0; j=j*zeroConditionNumber){
    count = count + number/j;
  }
  return Math.floor(count);
};

function getdevider(k){
  result =[];
  for (var i = 2; i<k-1; i++){
    if (k%i == 0){
      result.push(i);
    }
  }
  if (result.length==0){
    return k;
  } else{
  return result[result.length/2];
  }

}
