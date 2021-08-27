export default (entity) => {
  let sum = 0;
  entity.items.forEach((item) => {
    sum += item.totalPrice;
  });
  return sum;
};
