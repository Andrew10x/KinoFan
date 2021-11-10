const getSeatsArray = () => {
  const array = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const object = {
        row: i,
        seat: j,
        taken: false,
      };
      array.push(object);
    }
  }
  return array;
};

export default getSeatsArray;
