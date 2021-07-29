const createTransposedArray = array => {
    const newArray = [];
    for (let column = 0; column < array[0].length; column++) {
      const columnArray = [];
      for (let row = 0; row < array.length; row++) {
        columnArray.push(array[row][column]);
      }
  
      newArray.push(columnArray);
    }
    
    return newArray;
  };
  
  const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;
    const newArray = [...letters, ...createTransposedArray(letters)];
    const horizontalJoin = newArray.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  
    return false;
  };
  
  module.exports = wordSearch;
  
  // const smallArray = [
  //   ['a', 'b'],
  //   ['c', 'd']
  // ];
  
  // horizontalJoin --> ['ab','cd']
  // verticalJoin --> ['ac','bd']
  // 1. two loops
  // 2. take first element from first array
  // 3. in other loop, take element from 2nd array
  
  // array = 2D array
  
  // createTransposedArray(smallArray);
  // const horizontalJoin = newArray.map(ls => ls.join(''));
  // console.log(horizontalJoin);
  