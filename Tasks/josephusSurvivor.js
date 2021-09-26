function josephusSurvivor(n, k) {
  let survivorIndex = k - 1;
  let survivors = [];
  const denied = [];
  for (let i = 1; i <= n; ++i) {
    survivors.push(i);
  }
  while (survivors.length > 2) {
    if (survivorIndex >= survivors.length) {
      survivorIndex = survivorIndex - survivors.length;
    }
    denied.push(survivors[survivorIndex]);
    survivors.splice(survivorIndex, 1);
    --survivorIndex;
    survivorIndex += k;
  }
  return survivors[1];
}

console.log(josephusSurvivor(7, 3));
