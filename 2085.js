const filePath = process.platform === "linux" ? "/dev/stdin" : "./2085.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map(Number);
const treesList = input
  .shift()
  .split(" ")
  .map(Number);
const max = Math.max(...treesList);

function getBestCuttableHeight(M, trees, min, max) {
  let mid = 0;
  let best = 0;

  while (min <= max) {
    let gettableWoods = 0;
    mid = Math.floor((min + max) / 2);
    trees.forEach(tree => {
      let rest = tree - mid;
      if (rest > 0) gettableWoods += rest;
    });
    if (gettableWoods >= M) {
      if (mid > best) best = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return best;
}

const result = getBestCuttableHeight(M, treesList, 0, max);
console.log(result);
