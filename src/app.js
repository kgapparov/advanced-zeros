//hshint esversion:6
function getZeroCount(number, base){
  zeroConditionNumber = getdevider(base);
  count = 0;
  for (j = zeroConditionNumber; (number/j) > 0; j=j*zeroConditionNumber){
    count = count + Math.floor(number/j);
  }
  return count;
}
console.log(getdevider(144));

console.log(getZeroCount(82610032,144));


function getdevider(k){
  result =[];
  for (var i = 2; i<k-1; i++){
    if (k%i == 0){
      result.push(i);
    }
  }
  console.log(result);
  console.log(result[Math.floor(result.length/2)]);
  if (result.length==0){
    return k;
  } else{
  return result[Math.floor(result.length/2)];
  }

}
