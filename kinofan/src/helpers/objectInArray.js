const getObjectInArrayIndex = (array, row, seat) => {
  let objectIndex;
  array.forEach((object, index) => {
    if (object.row === row && object.seat === seat) objectIndex = index;
  });
  return objectIndex;
};

export default getObjectInArrayIndex;
