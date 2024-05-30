const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();

const v = [];
const dp = [];

class T {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.c = c;
  }
}

for (let i = 0; i < N; i++) {
  const [x, y, c] = input[i].split(" ").map(Number);
  v.push(new T(x, y, c));
}

function getMaximumProfit(N) {
  v.sort((a, b) => a.x - b.x);
  
  for (let i = 0; i < N; i++) {
    dp.push([v[i].c, v[i].c]);
  }
  
  let max = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (v[j].y < v[i].y) dp[i][0] = Math.max(dp[i][0], dp[j][0] + v[i].c);
      if (v[j].y > v[i].y) dp[i][1] = Math.max(dp[i][1], dp[j][1] + v[i].c);
    }
    max = Math.max(max, dp[i][0], dp[i][1]);
  }
  return max;
}


console.log(getMaximumProfit(N));