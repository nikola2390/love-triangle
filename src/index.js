/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var s = 0;

  for (let i = 1; i < preferences.length + 1; i++){
    
    let tmp1 = preferences[i - 1];
    let tmp2 = preferences[tmp1 - 1];

    if (preferences[tmp2 - 1] == i) {
      s++;
    }
   
  }

  return Math.floor(s/3);
};
