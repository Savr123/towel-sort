
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length == 0){
    return []
  }
  return matrix.reduce((x,y,i)=>x.concat(i%2?y.reverse():y), []);
}
