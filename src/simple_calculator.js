function add() {
  var sum =0 ,i =0;
  for( i =0; i< arguments.length; i++){
    sum += arguments[i]
  }
  return sum;
}

function multiply(){
  var sum =1;
  for( i =0; i< arguments.length; i++){
    sum *= arguments[i]
   }
   return sum;
  }

module.exports = {add,multiply}