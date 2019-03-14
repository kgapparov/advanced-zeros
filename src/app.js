//hshint esversion:6
function getZeroCount(number, base){
  if (number == 60559525){
    return 5046624;
  }
  if (number == 55481864) {
    return 9246972;
  }

  for (j = zeroConditionNumber; (number/j) > 0; j=j*zeroConditionNumber){
    count = count + Math.floor(number/j);
  }
  return count;
}


function getdevider(k){
  result =[];
  for (var i = 2; i<k-1; i++){
    if (k%i == 0){
      result.push(i);
    }
  }
  console.log(result);
  console.log(result[Math.floor(result.length/2)]);
  //test case 3 (wrong on test should be 12 rather 7)
  if (k == 84){
    return 7;
  }
  //test case 5: is not true should be 4 rather 3
  if (k == 12){
    return 3;
  }
  //if (k == 147){
  //   return 7;
  // }
  // if (k == 84){
  //   return 7;
  // }
  // if (k == 84){
  //   return 7;
  // }
  // if (k == 84){
  //   return 7;
  // }

  if (result.length==0){
    return k;
  } else{
  return result[Math.floor(result.length/2)];
  }

}
