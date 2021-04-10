function factorialize(num) {
  let product = 0;
  for (product = 1; num > 0; num--) {
    product *= num;
  }

  return product;
}

factorialize(5);
