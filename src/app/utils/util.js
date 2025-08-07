export function takeRandom(arr, num, id) {
  let result = [];
  let set = new Set();
  let rand;
  while (set.size < num) {
    rand = getRandomInt(0, arr.length - 1);
    if (!set.has(id) && rand != id) {
      set.add(rand);
    }
  }
  set.forEach((el) => result.push(arr[el]));
  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min); // Ensures min is an integer
  max = Math.floor(max); // Ensures max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
